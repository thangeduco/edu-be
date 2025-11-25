// controllers/LM/lm-progress.controller.ts

import { Request, Response } from 'express';
import {
  GetStudentCourseProgressUseCase,
  GetStudentCourseWeeksProgressUseCase,
  GetStudentDashboardUseCase,
  GetParentChildCourseProgressUseCase,
  GetParentChildrenSummaryUseCase,
} from '../../../application/LM/use-cases/progress/ProgressUseCases';

export class LmProgressController {
  constructor(
    private readonly getCourseProgressUC = new GetStudentCourseProgressUseCase(),
    private readonly getWeeksProgressUC = new GetStudentCourseWeeksProgressUseCase(),
    private readonly getDashboardUC = new GetStudentDashboardUseCase(),
    private readonly getParentChildProgressUC = new GetParentChildCourseProgressUseCase(),
    private readonly getParentChildrenSummaryUC = new GetParentChildrenSummaryUseCase(),
  ) {}

  async getStudentCourseProgress(req: Request, res: Response) {
    try {
      const { studentId, courseId } = req.query;
      const result = await this.getCourseProgressUC.execute({
        studentId: Number(studentId),
        courseId: Number(courseId),
      });
      res.json(result);
    } catch (err) {
      console.error('getStudentCourseProgress error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getStudentCourseWeeksProgress(req: Request, res: Response) {
    try {
      const { studentId, courseId } = req.query;
      const result = await this.getWeeksProgressUC.execute({
        studentId: Number(studentId),
        courseId: Number(courseId),
      });
      res.json(result);
    } catch (err) {
      console.error('getStudentCourseWeeksProgress error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getStudentDashboard(req: Request, res: Response) {
    try {
      const { studentId, courseId } = req.query;
      const result = await this.getDashboardUC.execute({
        studentId: Number(studentId),
        courseId: Number(courseId),
      });
      res.json(result);
    } catch (err) {
      console.error('getStudentDashboard error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getParentChildCourseProgress(req: Request, res: Response) {
    try {
      const { parentId, studentId, courseId } = req.query;
      const result = await this.getParentChildProgressUC.execute({
        parentId: Number(parentId),
        studentId: Number(studentId),
        courseId: Number(courseId),
      });
      res.json(result);
    } catch (err) {
      console.error('getParentChildCourseProgress error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getParentChildrenSummary(req: Request, res: Response) {
    try {
      const { parentId } = req.query;
      const result = await this.getParentChildrenSummaryUC.execute({
        parentId: Number(parentId),
      });
      res.json(result);
    } catch (err) {
      console.error('getParentChildrenSummary error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
