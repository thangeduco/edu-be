"use strict";
// controllers/LM/lm-study-plan.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmStudyPlanController = void 0;
const StudyPlanUseCases_1 = require("../../../application/LM/use-cases/plans/StudyPlanUseCases");
class LmStudyPlanController {
    constructor(createStudyPlanUC = new StudyPlanUseCases_1.CreateStudyPlanUseCase(), getCurrentStudyPlanUC = new StudyPlanUseCases_1.GetCurrentStudyPlanUseCase()) {
        this.createStudyPlanUC = createStudyPlanUC;
        this.getCurrentStudyPlanUC = getCurrentStudyPlanUC;
    }
    async createStudyPlan(req, res) {
        try {
            const result = await this.createStudyPlanUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('createStudyPlan error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getCurrentStudyPlan(req, res) {
        try {
            const { studentId, courseId } = req.query;
            const result = await this.getCurrentStudyPlanUC.execute({
                studentId: Number(studentId),
                courseId: Number(courseId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getCurrentStudyPlan error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmStudyPlanController = LmStudyPlanController;
