// controllers/BM/bm-student.controller.ts
// Skeleton controller cho student profile

import { Request, Response } from 'express';

export class BmStudentController {
  constructor() {}

  async getStudentProfile(_req: Request, res: Response) {
    try {
      // TODO: gọi use-case GetStudentProfileUseCase
      res.status(501).json({ message: 'getStudentProfile not implemented in controller skeleton' });
    } catch (err) {
      console.error('getStudentProfile error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
