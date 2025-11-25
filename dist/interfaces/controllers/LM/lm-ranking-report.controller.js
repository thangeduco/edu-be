"use strict";
// controllers/LM/lm-ranking-report.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmRankingReportController = void 0;
const RankingUseCases_1 = require("../../../application/LM/use-cases/ranking/RankingUseCases");
const ReportUseCases_1 = require("../../../application/LM/use-cases/reports/ReportUseCases");
const ReportUseCases_2 = require("../../../application/LM/use-cases/reports/ReportUseCases");
class LmRankingReportController {
    constructor(getCourseRankingsUC = new RankingUseCases_1.GetCourseRankingsUseCase(), getGroupRankingsUC = new RankingUseCases_1.GetGroupRankingsUseCase(), getStudentReportsUC = new ReportUseCases_1.GetStudentWeeklyReportsUseCase(), getParentReportsUC = new ReportUseCases_2.GetParentWeeklyReportsUseCase()) {
        this.getCourseRankingsUC = getCourseRankingsUC;
        this.getGroupRankingsUC = getGroupRankingsUC;
        this.getStudentReportsUC = getStudentReportsUC;
        this.getParentReportsUC = getParentReportsUC;
    }
    async getCourseRankings(req, res) {
        try {
            const { courseId, date } = req.query;
            const result = await this.getCourseRankingsUC.execute({
                courseId: Number(courseId),
                date: date,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getCourseRankings error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getGroupRankings(req, res) {
        try {
            const { groupId, date } = req.query;
            const result = await this.getGroupRankingsUC.execute({
                groupId: Number(groupId),
                date: date,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getGroupRankings error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getStudentWeeklyReports(req, res) {
        try {
            const { studentId, courseId } = req.query;
            const result = await this.getStudentReportsUC.execute({
                studentId: Number(studentId),
                courseId: courseId ? Number(courseId) : undefined,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getStudentWeeklyReports error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getParentWeeklyReports(req, res) {
        try {
            const { parentId, studentId, courseId } = req.query;
            const result = await this.getParentReportsUC.execute({
                parentId: Number(parentId),
                studentId: Number(studentId),
                courseId: courseId ? Number(courseId) : undefined,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getParentWeeklyReports error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmRankingReportController = LmRankingReportController;
