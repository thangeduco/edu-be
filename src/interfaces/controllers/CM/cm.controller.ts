import { Request, Response } from 'express';

export class CmController {
  // COURSES
  async listCourses(req: Request, res: Response) {
    res.json({ message: 'listCourses not implemented yet' });
  }

  async getCourseDetail(req: Request, res: Response) {
    res.json({ message: 'getCourseDetail not implemented yet' });
  }

  async getCourseWeeks(req: Request, res: Response) {
    res.json({ message: 'getCourseWeeks not implemented yet' });
  }

  async getWeekDetail(req: Request, res: Response) {
    res.json({ message: 'getWeekDetail not implemented yet' });
  }

  async getWeekLessons(req: Request, res: Response) {
    res.json({ message: 'getWeekLessons not implemented yet' });
  }

  async getLessonDetail(req: Request, res: Response) {
    res.json({ message: 'getLessonDetail not implemented yet' });
  }

  // VIDEOS
  async getLessonVideo(req: Request, res: Response) {
    res.json({ message: 'getLessonVideo not implemented yet' });
  }

  async getVideoDetail(req: Request, res: Response) {
    res.json({ message: 'getVideoDetail not implemented yet' });
  }

  // WORKSHEETS
  async getWeekWorksheets(req: Request, res: Response) {
    res.json({ message: 'getWeekWorksheets not implemented yet' });
  }

  async getWorksheetDetail(req: Request, res: Response) {
    res.json({ message: 'getWorksheetDetail not implemented yet' });
  }

  // QUESTIONS
  async getQuestionDetail(req: Request, res: Response) {
    res.json({ message: 'getQuestionDetail not implemented yet' });
  }

  async searchQuestions(req: Request, res: Response) {
    res.json({ message: 'searchQuestions not implemented yet' });
  }

  async getVideoQuestions(req: Request, res: Response) {
    res.json({ message: 'getVideoQuestions not implemented yet' });
  }

  async getWorksheetQuestions(req: Request, res: Response) {
    res.json({ message: 'getWorksheetQuestions not implemented yet' });
  }
}

export const cmController = new CmController();
