// src/infrastructure/CM/cm-pg-course-week-detail.query.ts

import { pgPool } from '../db/pgClient';

import {
  CourseWeekDetailQuery,
} from '../../application/CM/ports/CourseWeekDetailQuery';

import {
  CourseWeekDetailResponseDTO,
  CourseHeaderDTO,
  CourseSidebarDTO,
  CourseBodyDTO,
  SidebarWeekDTO,
  SidebarLessonDTO,
  BodyWeekDTO,
  BodyLessonDTO,
  BodyLessonVideoLectureDTO,
  BodyLessonWorksheetDTO,
} from '../../application/CM/dtos/CourseWeekDetailDTO';

/**
 * PgCourseWeekDetailQuery
 * Triển khai CourseWeekDetailQuery sử dụng Postgres.
 *
 * Trường hợp: PUBLIC VIEW (chưa có student_id).
 */
export class PgCourseWeekDetailQuery implements CourseWeekDetailQuery {
  /**
   * Lấy thông tin chi tiết khoá học + tuần/bài học/video/worksheet
   * cho màn CourseWeekDetailList.tsx (public view).
   */
  async getCourseWeekDetailForPublicView(input: {
    courseCode: string;
  }): Promise<CourseWeekDetailResponseDTO> {
    const { courseCode } = input;

    try {
      // 1. Lấy thông tin header + thống kê tổng quan
      const header = await this.fetchCourseHeader(courseCode);
      // Nếu không tìm thấy khoá học -> có thể throw hoặc trả null/404 tuỳ convention
      if (!header) {
        throw new Error(
          `[PgCourseWeekDetailQuery] Không tìm thấy khoá học với mã = ${courseCode}`
        );
      }

      // 2. Lấy thông tin chi tiết weeks/lessons/video/worksheets
      const { sidebar, body } = await this.fetchSidebarAndBody(courseCode);

      const response: CourseWeekDetailResponseDTO = {
        header,
        sidebar,
        body,
      };

      return response;
    } catch (err) {
      console.error(
        '[PgCourseWeekDetailQuery][getCourseWeekDetailForPublicView] ❌ Lỗi khi truy vấn chi tiết khoá học',
        err
      );
      throw err;
    }
  }

  /**
   * Query 1: Lấy header khoá học + thống kê số lượng bài VIDEO / WORKSHEET
   */
  private async fetchCourseHeader(
    courseCode: string
  ): Promise<CourseHeaderDTO | null> {
    try {
      const sql = `
        SELECT
          c.id,
          c.title,
          c.estimated_learning_time,
          c.cover_image_url,
          c.description,
          -- Đếm số bài giảng VIDEO
          (
            SELECT COUNT(*)
            FROM cm_lessons l
            JOIN cm_course_weeks w
              ON w.id = l.course_week_id
            WHERE w.course_id = c.id
              AND l.lesson_type = 'VIDEO'
          ) AS total_video_lessons_count,
          -- Đếm số bài WORKSHEET
          (
            SELECT COUNT(*)
            FROM cm_lessons l2
            JOIN cm_course_weeks w2
              ON w2.id = l2.course_week_id
            WHERE w2.course_id = c.id
              AND l2.lesson_type = 'WORKSHEET'
          ) AS total_worksheet_lessons_count
        FROM cm_courses c
        WHERE c.code = $1
      `;

      const result = await pgPool.query(sql, [courseCode]);
      if (result.rows.length === 0) {
        return null;
      }

      const row = result.rows[0];

      const header: CourseHeaderDTO = {
        id: row.id,
        title: row.title,
        estimatedLearningTime: row.estimated_learning_time ?? '',
        coverImageUrl: row.cover_image_url ?? null,
        description: row.description ?? null,
        totalVideoLessonsCount:
          Number(row.total_video_lessons_count ?? 0),
        totalWorksheetLessonsCount:
          Number(row.total_worksheet_lessons_count ?? 0),
      };

      return header;
    } catch (err) {
      console.error(
        '[PgCourseWeekDetailQuery][fetchCourseHeader] ❌ Lỗi khi truy vấn header khoá học',
        err
      );
      throw err;
    }
  }

  /**
   * Query 2: Lấy dữ liệu weeks/lessons/video/worksheets rồi build ra:
   *  - sidebar.weeks
   *  - body.weeks
   */
  private async fetchSidebarAndBody(courseCode: string): Promise<{
    sidebar: CourseSidebarDTO;
    body: CourseBodyDTO;
  }> {
    try {
      const sql = `
        SELECT
          w.id AS week_id,
          w.week_number,
          w.title AS week_title,
          w.description AS week_description,
          w.objective AS week_objective,

          l.id AS lesson_id,
          l.title AS lesson_title,
          l.description AS lesson_description,
          l.lesson_type,
          l.is_optional,
          l.order_index,

          v.id AS video_id,
          v.title AS video_title,
          v.description AS video_description,
          v.video_url,
          v.thumbnail_url,
          v.duration_seconds,

          ws.id AS worksheet_id,
          ws.title AS worksheet_title,
          ws.description AS worksheet_description,
          ws.question_file_url,
          ws.answer_file_url,
          ws.type AS worksheet_type,
          ws.due_days_offset,
          ws.estimated_minutes,
          ws.max_score,
          -- Nếu cột guide_file_url tồn tại trong cm_worksheets:
          ws.guide_file_url
        FROM cm_course_weeks w
        LEFT JOIN cm_lessons l
          ON l.course_week_id = w.id
        LEFT JOIN cm_video_lectures v
          ON v.lesson_id = l.id
        LEFT JOIN cm_worksheets ws
          ON ws.lesson_id = l.id
        WHERE w.course_code = $1
        ORDER BY
          w.week_number ASC,
          w.id ASC,
          l.order_index ASC,
          l.id ASC,
          v.id ASC,
          ws.id ASC
      `;

      const result = await pgPool.query(sql, [courseCode]);
      const rows = result.rows;

      // Map trung gian để build sidebar/body
      const sidebarWeeksMap = new Map<number, SidebarWeekDTO>();
      const bodyWeeksMap = new Map<number, BodyWeekDTO>();

      // Map lessonId -> BodyLessonDTO (theo từng week)
      const bodyLessonsMapByWeek = new Map<number, Map<number, BodyLessonDTO>>();

      // Map lessonId -> Set videoId / worksheetId để tránh duplicate
      const videoIdSetByLesson = new Map<number, Set<number>>();
      const worksheetIdSetByLesson = new Map<number, Set<number>>();

      for (const row of rows) {
        const weekId: number = row.week_id;

        // ----- Tạo week cho sidebar nếu chưa có -----
        let sidebarWeek = sidebarWeeksMap.get(weekId);
        if (!sidebarWeek) {
          sidebarWeek = {
            id: weekId,
            weekNumber: row.week_number,
            title: row.week_title,
            lessons: [],
          };
          sidebarWeeksMap.set(weekId, sidebarWeek);
        }

        // ----- Tạo week cho body nếu chưa có -----
        let bodyWeek = bodyWeeksMap.get(weekId);
        if (!bodyWeek) {
          bodyWeek = {
            id: weekId,
            weekNumber: row.week_number,
            title: row.week_title,
            description: row.week_description ?? null,
            objective: row.week_objective ?? null,
            lessons: [],
          };
          bodyWeeksMap.set(weekId, bodyWeek);
          bodyLessonsMapByWeek.set(weekId, new Map<number, BodyLessonDTO>());
        }

        const lessonId: number | null = row.lesson_id;

        // Nếu tuần chưa có bài học nào (lesson_id null) thì bỏ qua phần lesson/video/ws
        if (!lessonId) {
          continue;
        }

        // ================== SIDEBAR: LESSON ==================
        const sidebarLessons = sidebarWeek.lessons;
        const isLessonAlreadyInSidebar = sidebarLessons.some(
          (l) => l.id === lessonId
        );
        if (!isLessonAlreadyInSidebar) {
          const sidebarLesson: SidebarLessonDTO = {
            id: lessonId,
            title: row.lesson_title,
            orderIndex: row.order_index ?? 0,
          };
          sidebarLessons.push(sidebarLesson);
        }

        // ================== BODY: LESSON ==================
        const lessonsMapForWeek = bodyLessonsMapByWeek.get(weekId)!;
        let bodyLesson = lessonsMapForWeek.get(lessonId);
        if (!bodyLesson) {
          bodyLesson = {
            id: lessonId,
            title: row.lesson_title,
            description: row.lesson_description ?? null,
            lessonType: row.lesson_type,
            isOptional: row.is_optional ?? false,
            orderIndex: row.order_index ?? 0,
            videoLectures: [],
            worksheets: [],
          };
          lessonsMapForWeek.set(lessonId, bodyLesson);
          bodyWeek.lessons.push(bodyLesson);
        }

        // Chuẩn bị set tránh trùng video/worksheet
        if (!videoIdSetByLesson.has(lessonId)) {
          videoIdSetByLesson.set(lessonId, new Set<number>());
        }
        if (!worksheetIdSetByLesson.has(lessonId)) {
          worksheetIdSetByLesson.set(lessonId, new Set<number>());
        }

        const videoSet = videoIdSetByLesson.get(lessonId)!;
        const worksheetSet = worksheetIdSetByLesson.get(lessonId)!;

        // ================== BODY: VIDEO LECTURES ==================
        const videoId: number | null = row.video_id;
        if (videoId && !videoSet.has(videoId)) {
          const video: BodyLessonVideoLectureDTO = {
            id: videoId,
            title: row.video_title,
            description: row.video_description ?? null,
            videoUrl: row.video_url,
            thumbnailUrl: row.thumbnail_url ?? null,
            durationSeconds: Number(row.duration_seconds ?? 0),
          };
          bodyLesson.videoLectures.push(video);
          videoSet.add(videoId);
        }

        // ================== BODY: WORKSHEETS ==================
        const worksheetId: number | null = row.worksheet_id;
        if (worksheetId && !worksheetSet.has(worksheetId)) {
          const worksheet: BodyLessonWorksheetDTO = {
            id: worksheetId,
            title: row.worksheet_title,
            description: row.worksheet_description ?? null,
            questionFileUrl: row.question_file_url ?? null,
            answerFileUrl: row.answer_file_url ?? null,
            guideFileUrl: row.guide_file_url ?? null, // nếu cột này có trong DB
          };
          bodyLesson.worksheets.push(worksheet);
          worksheetSet.add(worksheetId);
        }
      }

      // Build DTO cuối cùng
      const sidebar: CourseSidebarDTO = {
        weeks: Array.from(sidebarWeeksMap.values()).map((w) => ({
          ...w,
          lessons: w.lessons.sort((a, b) => a.orderIndex - b.orderIndex),
        })),
      };

      const body: CourseBodyDTO = {
        weeks: Array.from(bodyWeeksMap.values()).map((w) => ({
          ...w,
          lessons: w.lessons.sort((a, b) => a.orderIndex - b.orderIndex),
        })),
      };

      // Sắp xếp tuần theo weekNumber (phòng trường hợp Map không đảm bảo thứ tự)
      sidebar.weeks.sort((a, b) => a.weekNumber - b.weekNumber);
      body.weeks.sort((a, b) => a.weekNumber - b.weekNumber);

      return { sidebar, body };
    } catch (err) {
      console.error(
        '[PgCourseWeekDetailQuery][fetchSidebarAndBody] ❌ Lỗi khi truy vấn weeks/lessons/video/worksheets',
        err
      );
      throw err;
    }
  }
}
