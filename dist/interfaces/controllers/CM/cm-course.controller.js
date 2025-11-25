"use strict";
// controllers/CM/cm-course.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmCourseController = void 0;
const CourseUseCases_1 = require("../../../application/CM/use-cases/courses/CourseUseCases");
class CmCourseController {
    constructor(listCoursesUC = new CourseUseCases_1.ListCoursesUseCase(), getCourseDetailUC = new CourseUseCases_1.GetCourseDetailUseCase(), getCourseWeeksUC = new CourseUseCases_1.GetCourseWeeksUseCase()) {
        this.listCoursesUC = listCoursesUC;
        this.getCourseDetailUC = getCourseDetailUC;
        this.getCourseWeeksUC = getCourseWeeksUC;
    }
    async listCourses(req, res) {
        try {
            const { grade, level, status } = req.query;
            const result = await this.listCoursesUC.execute({
                grade: grade,
                level: level,
                status: status,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listCourses error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getCourseDetail(req, res) {
        try {
            const courseId = Number(req.params.courseId);
            const result = await this.getCourseDetailUC.execute({ courseId });
            if (!result.course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getCourseDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getCourseWeeks(req, res) {
        try {
            const courseId = Number(req.params.courseId);
            const result = await this.getCourseWeeksUC.execute({ courseId });
            res.json(result);
        }
        catch (err) {
            console.error('getCourseWeeks error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmCourseController = CmCourseController;
