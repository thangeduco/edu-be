// controllers/LM/lm-badge.controller.ts

import { Request, Response } from 'express';
import { AwardBadgeUseCase } from '../../../application/LM/use-cases/badges/BadgeUseCases';

export class LmBadgeController {
  constructor(
    private readonly awardBadgeUC = new AwardBadgeUseCase(),
  ) {}

  async awardBadge(req: Request, res: Response) {
    try {
      const result = await this.awardBadgeUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('awardBadge error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
