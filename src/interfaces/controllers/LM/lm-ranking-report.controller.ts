// controllers/LM/lm-ranking-report.controller.ts

import { Request, Response } from 'express';
import {
  GetCourseRankingsUseCase,
  GetGroupRankingsUseCase
  
} from '../../../application/LM/use-cases/ranking/RankingUseCases';
import {
  GetStudentWeeklyReportsUseCase
} from '../../../application/LM/use-cases/reports/ReportUseCases';
import {
  GetParentWeeklyReportsUseCase
} from '../../../application/LM/use-cases/reports/ReportUseCases';



export class LmRankingReportController {
  constructor(
    private readonly getCourseRankingsUC = new GetCourseRankingsUseCase(),
    private readonly getGroupRankingsUC = new GetGroupRankingsUseCase(),
    private readonly getStudentReportsUC = new GetStudentWeeklyReportsUseCase(),
    private readonly getParentReportsUC = new GetParentWeeklyReportsUseCase(),
  ) {}

  async getCourseRankings(req: Request, res: Response) {
    try {
      const { courseId, date } = req.query;
      const result = await this.getCourseRankingsUC.execute({
        courseId: Number(courseId),
        date: date as string | undefined,
      } as any);
      res.json(result);
    } catch (err) {
      console.error('getCourseRankings error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getGroupRankings(req: Request, res: Response) {
    try {
      const { groupId, date } = req.query;
      const result = await this.getGroupRankingsUC.execute({
        groupId: Number(groupId),
        date: date as string | undefined,
      } as any);
      res.json(result);
    } catch (err) {
      console.error('getGroupRankings error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getStudentWeeklyReports(req: Request, res: Response) {
    try {
      const { studentId, courseId } = req.query;
      const result = await this.getStudentReportsUC.execute({
        studentId: Number(studentId),
        courseId: courseId ? Number(courseId) : undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('getStudentWeeklyReports error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getParentWeeklyReports(req: Request, res: Response) {
    try {
      const { parentId, studentId, courseId } = req.query;
      const result = await this.getParentReportsUC.execute({
        parentId: Number(parentId),
        studentId: Number(studentId),
        courseId: courseId ? Number(courseId) : undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('getParentWeeklyReports error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
