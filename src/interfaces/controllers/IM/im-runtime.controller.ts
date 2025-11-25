// controllers/IM/im-runtime.controller.ts

import { Request, Response } from 'express';
import { RuntimeNextStepUseCase } from '../../../application/IM/use-cases/video-interactions/RuntimeUseCases';

export class ImRuntimeController {
  constructor(
    private readonly runtimeNextStepUC = new RuntimeNextStepUseCase(),
  ) {}

  async getNextStep(req: Request, res: Response) {
    try {
      const { videoId, currentTimestampSec, currentEventId, studentId, answerContext } = req.body;
      const result = await this.runtimeNextStepUC.execute({
        videoId: Number(videoId),
        currentTimestampSec: Number(currentTimestampSec),
        currentEventId: currentEventId ? Number(currentEventId) : undefined,
        studentId: studentId ? Number(studentId) : undefined,
        answerContext,
      });
      res.json(result);
    } catch (err) {
      console.error('getNextStep error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
