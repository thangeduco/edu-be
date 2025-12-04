// src/interface/controllers/CM/cm-course-week-detail.controller.ts

import { Request, Response } from "express";

import { CourseWeekDetailUseCases } from "../../../application/CM/use-cases/CourseWeekDetailUseCases";
import { PgCourseWeekDetailQuery } from "../../../infrastructure/CM/cm-pg-course-week-detail.query";

// Khởi tạo query & usecase chuẩn kiến trúc
const courseWeekDetailQuery = new PgCourseWeekDetailQuery();
const courseWeekDetailUC = new CourseWeekDetailUseCases(courseWeekDetailQuery);

/**
 * cmCourseWeekDetailController
 * API PUBLIC VIEW cho chi tiết khoá học:
 *
 * - GET /api/cm/courses/:courseCode/week-detail/public
 */
export const cmCourseWeekDetailController = {
  /**
   * Lấy thông tin chi tiết khoá học dành cho người dùng chưa đăng ký / chưa đăng nhập.
   * GET /api/cm/courses/:courseCode/week-detail/public
   */
  async getCourseWeekDetailForPublicView(req: Request, res: Response) {
    const { courseCode } = req.params;

    console.info(
      `[cmCourseWeekDetailController][getCourseWeekDetailForPublicView] courseCode=${courseCode}`
    );

    try {
      const dto =
        await courseWeekDetailUC.getCourseWeekDetailForPublicView(
          courseCode
        );

      return res.status(200).json(dto);
    } catch (err: any) {
      console.error(
        "[cmCourseWeekDetailController][getCourseWeekDetailForPublicView] ❌ Error",
        err
      );

      return res.status(404).json({
        error: err?.message || "Không tìm thấy dữ liệu khoá học",
      });
    }
  },
};
