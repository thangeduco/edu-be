"use strict";
// controllers/LM/lm-goal.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmGoalController = void 0;
const GoalUseCases_1 = require("../../../application/LM/use-cases/goals/GoalUseCases");
class LmGoalController {
    constructor(createGoalUC = new GoalUseCases_1.CreateGoalUseCase(), listGoalsUC = new GoalUseCases_1.ListGoalsUseCase(), updateGoalUC = new GoalUseCases_1.UpdateGoalUseCase()) {
        this.createGoalUC = createGoalUC;
        this.listGoalsUC = listGoalsUC;
        this.updateGoalUC = updateGoalUC;
    }
    async createGoal(req, res) {
        try {
            const result = await this.createGoalUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('createGoal error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listGoals(req, res) {
        try {
            const { studentId, courseId, status } = req.query;
            const result = await this.listGoalsUC.execute({
                studentId: Number(studentId),
                courseId: courseId ? Number(courseId) : undefined,
                status: status,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listGoals error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async updateGoal(req, res) {
        try {
            const goalId = Number(req.params.goalId);
            const input = { ...req.body, goalId };
            const result = await this.updateGoalUC.execute(input);
            res.json(result);
        }
        catch (err) {
            console.error('updateGoal error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmGoalController = LmGoalController;
