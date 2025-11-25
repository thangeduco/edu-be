"use strict";
// controllers/LM/lm-progress.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmProgressController = void 0;
const ProgressUseCases_1 = require("../../../application/LM/use-cases/progress/ProgressUseCases");
class LmProgressController {
    constructor(getCourseProgressUC = new ProgressUseCases_1.GetStudentCourseProgressUseCase(), getWeeksProgressUC = new ProgressUseCases_1.GetStudentCourseWeeksProgressUseCase(), getDashboardUC = new ProgressUseCases_1.GetStudentDashboardUseCase(), getParentChildProgressUC = new ProgressUseCases_1.GetParentChildCourseProgressUseCase(), getParentChildrenSummaryUC = new ProgressUseCases_1.GetParentChildrenSummaryUseCase()) {
        this.getCourseProgressUC = getCourseProgressUC;
        this.getWeeksProgressUC = getWeeksProgressUC;
        this.getDashboardUC = getDashboardUC;
        this.getParentChildProgressUC = getParentChildProgressUC;
        this.getParentChildrenSummaryUC = getParentChildrenSummaryUC;
    }
    async getStudentCourseProgress(req, res) {
        try {
            const { studentId, courseId } = req.query;
            const result = await this.getCourseProgressUC.execute({
                studentId: Number(studentId),
                courseId: Number(courseId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getStudentCourseProgress error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getStudentCourseWeeksProgress(req, res) {
        try {
            const { studentId, courseId } = req.query;
            const result = await this.getWeeksProgressUC.execute({
                studentId: Number(studentId),
                courseId: Number(courseId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getStudentCourseWeeksProgress error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getStudentDashboard(req, res) {
        try {
            const { studentId, courseId } = req.query;
            const result = await this.getDashboardUC.execute({
                studentId: Number(studentId),
                courseId: Number(courseId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getStudentDashboard error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getParentChildCourseProgress(req, res) {
        try {
            const { parentId, studentId, courseId } = req.query;
            const result = await this.getParentChildProgressUC.execute({
                parentId: Number(parentId),
                studentId: Number(studentId),
                courseId: Number(courseId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getParentChildCourseProgress error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getParentChildrenSummary(req, res) {
        try {
            const { parentId } = req.query;
            const result = await this.getParentChildrenSummaryUC.execute({
                parentId: Number(parentId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getParentChildrenSummary error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmProgressController = LmProgressController;
