"use strict";
// controllers/CM/cm-week.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmWeekController = void 0;
const WeekUseCases_1 = require("../../../application/CM/use-cases/weeks/WeekUseCases");
class CmWeekController {
    constructor(getWeekDetailUC = new WeekUseCases_1.GetWeekDetailUseCase(), getWeekLessonsUC = new WeekUseCases_1.GetWeekLessonsUseCase()) {
        this.getWeekDetailUC = getWeekDetailUC;
        this.getWeekLessonsUC = getWeekLessonsUC;
    }
    async getWeekDetail(req, res) {
        try {
            const weekId = Number(req.params.weekId);
            const result = await this.getWeekDetailUC.execute({ weekId });
            if (!result.week) {
                return res.status(404).json({ message: 'Week not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getWeekDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getWeekLessons(req, res) {
        try {
            const weekId = Number(req.params.weekId);
            const result = await this.getWeekLessonsUC.execute({ weekId });
            res.json(result);
        }
        catch (err) {
            console.error('getWeekLessons error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmWeekController = CmWeekController;
