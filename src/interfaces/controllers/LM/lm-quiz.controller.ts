// controllers/LM/lm-quiz.controller.ts

import { Request, Response } from 'express';
import {
  RecordQuizAttemptUseCase,
  GetQuizSummaryUseCase,
} from '../../../application/LM/use-cases/quiz/QuizUseCases';

export class LmQuizController {
  constructor(
    private readonly recordAttemptUC = new RecordQuizAttemptUseCase(),
    private readonly getSummaryUC = new GetQuizSummaryUseCase(),
  ) {}

  async recordAttempt(req: Request, res: Response) {
    try {
      const result = await this.recordAttemptUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('recordAttempt error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getSummary(req: Request, res: Response) {
    try {
      const { studentId, courseId, fromDate, toDate } = req.query;
      const result = await this.getSummaryUC.execute({
        studentId: Number(studentId),
        courseId: courseId ? Number(courseId) : undefined,
        fromDate: fromDate as string | undefined,
        toDate: toDate as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('getSummary error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
