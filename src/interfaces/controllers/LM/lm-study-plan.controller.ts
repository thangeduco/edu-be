// controllers/LM/lm-study-plan.controller.ts

import { Request, Response } from 'express';
import {
  CreateStudyPlanUseCase,
  GetCurrentStudyPlanUseCase,
} from '../../../application/LM/use-cases/plans/StudyPlanUseCases';

export class LmStudyPlanController {
  constructor(
    private readonly createStudyPlanUC = new CreateStudyPlanUseCase(),
    private readonly getCurrentStudyPlanUC = new GetCurrentStudyPlanUseCase(),
  ) {}

  async createStudyPlan(req: Request, res: Response) {
    try {
      const result = await this.createStudyPlanUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('createStudyPlan error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getCurrentStudyPlan(req: Request, res: Response) {
    try {
      const { studentId, courseId } = req.query;
      const result = await this.getCurrentStudyPlanUC.execute({
        studentId: Number(studentId),
        courseId: Number(courseId),
      });
      res.json(result);
    } catch (err) {
      console.error('getCurrentStudyPlan error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
