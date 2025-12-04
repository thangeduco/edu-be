"use strict";
// src/application/CM/use-cases/CourseWeekDetailUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseWeekDetailUseCases = void 0;
/**
 * Use Case: CourseWeekDetailUseCases
 * Xử lý các nghiệp vụ liên quan đến việc lấy thông tin chi tiết khoá học
 * dành cho màn CourseWeekDetailList.tsx (public view - chưa đăng nhập).
 */
class CourseWeekDetailUseCases {
    constructor(query) {
        this.query = query;
    }
    /**
     * Lấy thông tin chi tiết khoá học khi người dùng chưa đăng nhập.
     * @param courseCode cm_courses.id
     */
    async getCourseWeekDetailForPublicView(courseCode) {
        console.info(`[CourseWeekDetailUseCases][getCourseWeekDetailForPublicView] 🔍 Lấy chi tiết khoá học public view: courseCode=${courseCode}`);
        const dto = await this.query.getCourseWeekDetailForPublicView({ courseCode });
        if (!dto) {
            throw new Error(`Không tìm thấy dữ liệu chi tiết khoá học với mã: ${courseCode}`);
        }
        return dto;
    }
}
exports.CourseWeekDetailUseCases = CourseWeekDetailUseCases;
