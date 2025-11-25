// controllers/CM/cm-course.controller.ts

import { Request, Response } from 'express';
import {
  ListCoursesUseCase,
  GetCourseDetailUseCase,
  GetCourseWeeksUseCase,
} from '../../../application/CM/use-cases/courses/CourseUseCases';

export class CmCourseController {
  constructor(
    private readonly listCoursesUC = new ListCoursesUseCase(),
    private readonly getCourseDetailUC = new GetCourseDetailUseCase(),
    private readonly getCourseWeeksUC = new GetCourseWeeksUseCase(),
  ) {}

  async listCourses(req: Request, res: Response) {
    try {
      const { grade, level, status } = req.query;
      const result = await this.listCoursesUC.execute({
        grade: grade as string | undefined,
        level: level as string | undefined,
        status: status as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listCourses error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getCourseDetail(req: Request, res: Response) {
    try {
      const courseId = Number(req.params.courseId);
      const result = await this.getCourseDetailUC.execute({ courseId });
      if (!result.course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getCourseDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getCourseWeeks(req: Request, res: Response) {
    try {
      const courseId = Number(req.params.courseId);
      const result = await this.getCourseWeeksUC.execute({ courseId });
      res.json(result);
    } catch (err) {
      console.error('getCourseWeeks error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
