// src/application/CM/dtos/CourseWeekDetailDTO.ts

/**
 * DTO gốc trả về cho màn CourseWeekDetailList.tsx (public view).
 * Được chia theo đúng 3 vùng UI:
 *  - header: vùng course header
 *  - sidebar: vùng course sidebar
 *  - body: vùng chi tiết khoá học
 */
export interface CourseWeekDetailResponseDTO {
  header: CourseHeaderDTO;
  sidebar: CourseSidebarDTO;
  body: CourseBodyDTO;
}

/* -------------------------------------------------------------------------- */
/*                               1. COURSE HEADER                             */
/* -------------------------------------------------------------------------- */

/**
 * Thông tin dùng cho vùng course header.
 */
export interface CourseHeaderDTO {
  /**
   * ID khoá học (cm_courses.id)
   */
  id: number;

  /**
   * Tiêu đề khoá học (cm_courses.title)
   */
  title: string;

  /**
   * Ước lượng thời lượng học cần thiết
   * (cm_courses.estimated_learning_time)
   */
  estimatedLearningTime: string;

  /**
   * Số lượng bài giảng video
   * = Đếm số bản ghi cm_lessons của toàn bộ course_week_id
   *   thuộc khoá học với lesson_type = 'VIDEO'
   */
  totalVideoLessonsCount: number;

  /**
   * Số lượng phiếu bài tập về nhà
   * = Đếm số bản ghi cm_lessons của toàn bộ course_week_id
   *   thuộc khoá học với lesson_type = 'WORKSHEET'
   */
  totalWorksheetLessonsCount: number;

  /**
   * Ảnh cover khoá học (cm_courses.cover_image_url)
   * (optional - nếu FE muốn hiển thị)
   */
  coverImageUrl?: string | null;

  /**
   * Mô tả chi tiết khoá học (cm_courses.description)
   * (optional - nếu FE muốn hiển thị thêm)
   */
  description?: string | null;
}

/* -------------------------------------------------------------------------- */
/*                               2. COURSE SIDEBAR                            */
/* -------------------------------------------------------------------------- */

/**
 * DTO cho vùng course sidebar.
 * Chỉ cần thông tin cấu trúc tuần/bài học để điều hướng.
 */
export interface CourseSidebarDTO {
  /**
   * Danh sách tuần học của khoá để hiển thị trong sidebar.
   */
  weeks: SidebarWeekDTO[];
}

/**
 * Thông tin 1 tuần học dùng cho sidebar.
 * Tập trung vào thông tin nhận diện + điều hướng.
 */
export interface SidebarWeekDTO {
  /**
   * ID tuần học (cm_course_weeks.id)
   */
  id: number;

  /**
   * Số thứ tự tuần trong khoá (cm_course_weeks.week_number)
   */
  weekNumber: number;

  /**
   * Tiêu đề tuần học (cm_course_weeks.title)
   */
  title: string;

  /**
   * Danh sách bài học trong tuần cho sidebar.
   */
  lessons: SidebarLessonDTO[];
}

/**
 * Thông tin 1 bài học trong sidebar.
 */
export interface SidebarLessonDTO {
  /**
   * ID bài học (cm_lessons.id)
   */
  id: number;

  /**
   * Tiêu đề bài học (cm_lessons.title)
   */
  title: string;

  /**
   * Thứ tự bài học trong tuần (cm_lessons.order_index)
   * (giúp sắp xếp đúng thứ tự trong UI)
   */
  orderIndex: number;
}

/* -------------------------------------------------------------------------- */
/*                             3. COURSE BODY DETAIL                          */
/* -------------------------------------------------------------------------- */

/**
 * DTO cho vùng body chi tiết khoá học.
 * Chứa đầy đủ thông tin tuần/bài học/video/worksheet.
 */
export interface CourseBodyDTO {
  /**
   * Danh sách tuần học với thông tin chi tiết.
   */
  weeks: BodyWeekDTO[];
}

/**
 * Thông tin chi tiết 1 tuần học trong body.
 */
export interface BodyWeekDTO {
  /**
   * ID tuần học (cm_course_weeks.id)
   */
  id: number;

  /**
   * Số thứ tự tuần trong khoá (cm_course_weeks.week_number)
   */
  weekNumber: number;

  /**
   * Tiêu đề tuần học (cm_course_weeks.title)
   */
  title: string;

  /**
   * Mô tả tuần học (cm_course_weeks.description)
   */
  description: string | null;

  /**
   * Mục tiêu tuần học (cm_course_weeks.objective)
   * (optional - hữu ích nếu sau này muốn hiển thị)
   */
  objective?: string | null;

  /**
   * Danh sách các bài học của tuần trong body.
   */
  lessons: BodyLessonDTO[];
}

/**
 * Thông tin chi tiết 1 bài học trong body.
 */
export interface BodyLessonDTO {
  /**
   * ID bài học (cm_lessons.id)
   */
  id: number;

  /**
   * Tiêu đề bài học (cm_lessons.title)
   */
  title: string;

  /**
   * Mô tả bài học (cm_lessons.description)
   */
  description: string | null;

  /**
   * Loại bài học (cm_lessons.lesson_type)
   * Ví dụ: 'VIDEO', 'REVIEW', 'WORKSHEET', ...
   */
  lessonType: string;

  /**
   * Bài học có bắt buộc hay không (cm_lessons.is_optional)
   * false = bắt buộc, true = tuỳ chọn
   */
  isOptional: boolean;

  /**
   * Thứ tự bài học trong tuần (cm_lessons.order_index)
   */
  orderIndex: number;

  /**
   * Danh sách video bài giảng thuộc bài học này.
   * Map từ cm_video_lectures.
   */
  videoLectures: BodyLessonVideoLectureDTO[];

  /**
   * Danh sách worksheet (phiếu bài tập về nhà) thuộc bài học này.
   * Map từ cm_worksheets.
   */
  worksheets: BodyLessonWorksheetDTO[];
}

/**
 * Thông tin 1 video bài giảng trong body.
 */
export interface BodyLessonVideoLectureDTO {
  /**
   * ID video bài giảng (cm_video_lectures.id)
   */
  id: number;

  /**
   * Tiêu đề video (cm_video_lectures.title)
   */
  title: string;

  /**
   * Mô tả video (cm_video_lectures.description)
   */
  description: string | null;

  /**
   * URL video bài giảng (cm_video_lectures.video_url)
   */
  videoUrl: string;

  /**
   * Ảnh thumbnail của video (cm_video_lectures.thumbnail_url)
   */
  thumbnailUrl: string | null;

  /**
   * Thời lượng video (giây) (cm_video_lectures.duration_seconds)
   */
  durationSeconds: number;
}

/**
 * Thông tin 1 worksheet (phiếu bài tập về nhà) trong body.
 */
export interface BodyLessonWorksheetDTO {
  /**
   * ID worksheet (cm_worksheets.id)
   */
  id: number;

  /**
   * Tiêu đề worksheet (cm_worksheets.title)
   */
  title: string;

  /**
   * Mô tả worksheet (cm_worksheets.description)
   */
  description: string | null;

  /**
   * File câu hỏi bài tập về nhà (cm_worksheets.question_file_url)
   */
  questionFileUrl: string | null;

  /**
   * File đáp án bài tập về nhà (cm_worksheets.answer_file_url)
   */
  answerFileUrl: string | null;

  /**
   * File hướng dẫn / gợi ý của thầy (guide_file_url).
   * Cột này bạn mô tả ở requirement, hiện chưa có trong schema bên trên
   * nên để optional cho an toàn.
   */
  guideFileUrl?: string | null;
}
