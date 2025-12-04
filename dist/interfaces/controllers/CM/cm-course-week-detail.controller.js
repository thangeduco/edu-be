"use strict";
// src/interface/controllers/CM/cm-course-week-detail.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmCourseWeekDetailController = void 0;
const CourseWeekDetailUseCases_1 = require("../../../application/CM/use-cases/CourseWeekDetailUseCases");
const cm_pg_course_week_detail_query_1 = require("../../../infrastructure/CM/cm-pg-course-week-detail.query");
// Khởi tạo query & usecase chuẩn kiến trúc
const courseWeekDetailQuery = new cm_pg_course_week_detail_query_1.PgCourseWeekDetailQuery();
const courseWeekDetailUC = new CourseWeekDetailUseCases_1.CourseWeekDetailUseCases(courseWeekDetailQuery);
/**
 * cmCourseWeekDetailController
 * API PUBLIC VIEW cho chi tiết khoá học:
 *
 * - GET /api/cm/courses/:courseCode/week-detail/public
 */
exports.cmCourseWeekDetailController = {
    /**
     * Lấy thông tin chi tiết khoá học dành cho người dùng chưa đăng ký / chưa đăng nhập.
     * GET /api/cm/courses/:courseCode/week-detail/public
     */
    async getCourseWeekDetailForPublicView(req, res) {
        const { courseCode } = req.params;
        console.info(`[cmCourseWeekDetailController][getCourseWeekDetailForPublicView] courseCode=${courseCode}`);
        try {
            const dto = await courseWeekDetailUC.getCourseWeekDetailForPublicView(courseCode);
            return res.status(200).json(dto);
        }
        catch (err) {
            console.error("[cmCourseWeekDetailController][getCourseWeekDetailForPublicView] ❌ Error", err);
            return res.status(404).json({
                error: err?.message || "Không tìm thấy dữ liệu khoá học",
            });
        }
    },
};
