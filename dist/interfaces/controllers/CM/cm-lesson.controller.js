"use strict";
// controllers/CM/cm-lesson.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmLessonController = void 0;
const LessonUseCases_1 = require("../../../application/CM/use-cases/lessons/LessonUseCases");
class CmLessonController {
    constructor(getLessonDetailUC = new LessonUseCases_1.GetLessonDetailUseCase()) {
        this.getLessonDetailUC = getLessonDetailUC;
    }
    async getLessonDetail(req, res) {
        try {
            const lessonId = Number(req.params.lessonId);
            const result = await this.getLessonDetailUC.execute({ lessonId });
            if (!result.lesson) {
                return res.status(404).json({ message: 'Lesson not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getLessonDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmLessonController = CmLessonController;
