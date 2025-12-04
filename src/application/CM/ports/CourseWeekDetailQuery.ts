// src/application/CM/ports/CourseWeekDetailQuery.ts

import { CourseWeekDetailResponseDTO } from '../dtos/CourseWeekDetailDTO';

/**
 * Port (application-level) cho use-case lấy dữ liệu CourseWeekDetail
 * trong trường hợp PUBLIC VIEW:
 * - Người dùng chỉ xem khoá học, chưa đăng nhập / chưa có student_id.
 *
 * Implementation sẽ nằm ở infra (PostgreSQL, ORM, ...),
 * sử dụng các câu query JOIN trên:
 *  - cm_courses
 *  - cm_course_weeks
 *  - cm_lessons
 *  - cm_video_lectures
 *  - cm_worksheets
 * và map sang CourseWeekDetailResponseDTO phục vụ 3 vùng UI:
 *  - header
 *  - sidebar
 *  - body
 */
export interface CourseWeekDetailQuery {
  /**
   * Lấy thông tin chi tiết khoá học + tuần + bài học + video + worksheet
   * để hiển thị trên màn CourseWeekDetailList.tsx (public view).
   *
   * @param input.courseCode Mã khoá học (cm_courses.course_code)
   */
  getCourseWeekDetailForPublicView(input: {
    courseCode: string;
  }): Promise<CourseWeekDetailResponseDTO>;
}
