// controllers/LM/lm-video-learning.controller.ts

import { Request, Response } from 'express';
import {
  StartVideoSessionUseCase,
  StopVideoSessionUseCase,
  GetVideoProgressUseCase,
} from '../../../application/LM/use-cases/video-learning/VideoLearningUseCases';

export class LmVideoLearningController {
  constructor(
    private readonly startSessionUC = new StartVideoSessionUseCase(),
    private readonly stopSessionUC = new StopVideoSessionUseCase(),
    private readonly getProgressUC = new GetVideoProgressUseCase(),
  ) {}

  async startVideoSession(req: Request, res: Response) {
    try {
      const result = await this.startSessionUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('startVideoSession error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async stopVideoSession(req: Request, res: Response) {
    try {
      const result = await this.stopSessionUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('stopVideoSession error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getVideoProgress(req: Request, res: Response) {
    try {
      const { studentId, videoId } = req.query;
      const result = await this.getProgressUC.execute({
        studentId: Number(studentId),
        videoId: Number(videoId),
      });
      res.json(result);
    } catch (err) {
      console.error('getVideoProgress error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
