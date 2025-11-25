// controllers/CM/cm-video.controller.ts

import { Request, Response } from 'express';
import {
  GetLessonVideoUseCase,
  GetVideoDetailUseCase,
} from '../../../application/CM/use-cases/videos/VideoUseCases';

export class CmVideoController {
  constructor(
    private readonly getLessonVideoUC = new GetLessonVideoUseCase(),
    private readonly getVideoDetailUC = new GetVideoDetailUseCase(),
  ) {}

  async getLessonVideo(req: Request, res: Response) {
    try {
      const lessonId = Number(req.params.lessonId);
      const result = await this.getLessonVideoUC.execute({ lessonId });
      if (!result.video) {
        return res.status(404).json({ message: 'Video not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getLessonVideo error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getVideoDetail(req: Request, res: Response) {
    try {
      const videoId = Number(req.params.videoId);
      const result = await this.getVideoDetailUC.execute({ videoId });
      if (!result.video) {
        return res.status(404).json({ message: 'Video not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getVideoDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
