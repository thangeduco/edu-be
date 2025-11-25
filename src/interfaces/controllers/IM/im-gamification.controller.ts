// controllers/IM/im-gamification.controller.ts

import { Request, Response } from 'express';
import {
  ListAnimationsUseCase,
  ListSoundsUseCase,
  ListBadgePresetsUseCase,
} from '../../../application/IM/use-cases/gamification/GamificationUseCases';

export class ImGamificationController {
  constructor(
    private readonly listAnimationsUC = new ListAnimationsUseCase(),
    private readonly listSoundsUC = new ListSoundsUseCase(),
    private readonly listBadgePresetsUC = new ListBadgePresetsUseCase(),
  ) {}

  async listAnimations(req: Request, res: Response) {
    try {
      const { keyword } = req.query;
      const result = await this.listAnimationsUC.execute({
        keyword: keyword as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listAnimations error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listSounds(req: Request, res: Response) {
    try {
      const { keyword } = req.query;
      const result = await this.listSoundsUC.execute({
        keyword: keyword as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listSounds error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listBadgePresets(req: Request, res: Response) {
    try {
      const { keyword } = req.query;
      const result = await this.listBadgePresetsUC.execute({
        keyword: keyword as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listBadgePresets error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
