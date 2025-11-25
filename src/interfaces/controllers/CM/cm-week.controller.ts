// controllers/CM/cm-week.controller.ts

import { Request, Response } from 'express';
import {
  GetWeekDetailUseCase,
  GetWeekLessonsUseCase,
} from '../../../application/CM/use-cases/weeks/WeekUseCases';

export class CmWeekController {
  constructor(
    private readonly getWeekDetailUC = new GetWeekDetailUseCase(),
    private readonly getWeekLessonsUC = new GetWeekLessonsUseCase(),
  ) {}

  async getWeekDetail(req: Request, res: Response) {
    try {
      const weekId = Number(req.params.weekId);
      const result = await this.getWeekDetailUC.execute({ weekId });
      if (!result.week) {
        return res.status(404).json({ message: 'Week not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getWeekDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getWeekLessons(req: Request, res: Response) {
    try {
      const weekId = Number(req.params.weekId);
      const result = await this.getWeekLessonsUC.execute({ weekId });
      res.json(result);
    } catch (err) {
      console.error('getWeekLessons error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
