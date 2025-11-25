// controllers/CM/cm-lesson.controller.ts

import { Request, Response } from 'express';
import { GetLessonDetailUseCase } from '../../../application/CM/use-cases/lessons/LessonUseCases';

export class CmLessonController {
  constructor(
    private readonly getLessonDetailUC = new GetLessonDetailUseCase(),
  ) {}

  async getLessonDetail(req: Request, res: Response) {
    try {
      const lessonId = Number(req.params.lessonId);
      const result = await this.getLessonDetailUC.execute({ lessonId });
      if (!result.lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getLessonDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
