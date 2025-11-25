"use strict";
// controllers/LM/lm-quiz.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmQuizController = void 0;
const QuizUseCases_1 = require("../../../application/LM/use-cases/quiz/QuizUseCases");
class LmQuizController {
    constructor(recordAttemptUC = new QuizUseCases_1.RecordQuizAttemptUseCase(), getSummaryUC = new QuizUseCases_1.GetQuizSummaryUseCase()) {
        this.recordAttemptUC = recordAttemptUC;
        this.getSummaryUC = getSummaryUC;
    }
    async recordAttempt(req, res) {
        try {
            const result = await this.recordAttemptUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('recordAttempt error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getSummary(req, res) {
        try {
            const { studentId, courseId, fromDate, toDate } = req.query;
            const result = await this.getSummaryUC.execute({
                studentId: Number(studentId),
                courseId: courseId ? Number(courseId) : undefined,
                fromDate: fromDate,
                toDate: toDate,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getSummary error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmQuizController = LmQuizController;
