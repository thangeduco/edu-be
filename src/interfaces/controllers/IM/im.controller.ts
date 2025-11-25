import { Request, Response } from 'express';

export class ImController {
  // Interaction types/configs
  async listInteractionTypes(req: Request, res: Response) {
    res.json({ message: 'listInteractionTypes not implemented yet' });
  }

  async listInteractionConfigs(req: Request, res: Response) {
    res.json({ message: 'listInteractionConfigs not implemented yet' });
  }

  async getInteractionConfig(req: Request, res: Response) {
    res.json({ message: 'getInteractionConfig not implemented yet' });
  }

  // Video interactions timeline
  async getVideoTimeline(req: Request, res: Response) {
    res.json({ message: 'getVideoTimeline not implemented yet' });
  }

  // Gamification assets
  async listAnimations(req: Request, res: Response) {
    res.json({ message: 'listAnimations not implemented yet' });
  }

  async listSounds(req: Request, res: Response) {
    res.json({ message: 'listSounds not implemented yet' });
  }

  async listBadgePresets(req: Request, res: Response) {
    res.json({ message: 'listBadgePresets not implemented yet' });
  }

  // Runtime support
  async getRuntimeNextStep(req: Request, res: Response) {
    res.json({ message: 'getRuntimeNextStep not implemented yet' });
  }
}

export const imController = new ImController();
