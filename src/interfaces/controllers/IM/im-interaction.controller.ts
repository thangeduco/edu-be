// controllers/IM/im-interaction.controller.ts

import { Request, Response } from 'express';
import {
  GetVideoTimelineUseCase,
} from '../../../application/IM/use-cases/video-interactions/VideoInteractionUseCases';
import { ListInteractionTypesUseCase } from '../../../application/IM/use-cases/interaction-types/InteractionTypeUseCases';
import { ListInteractionConfigsUseCase } from '../../../application/IM/use-cases/interaction-configs/InteractionConfigUseCases';
import { GetInteractionConfigUseCase } from '../../../application/IM/use-cases/interaction-configs/InteractionConfigUseCases';

export class ImInteractionController {
  constructor(
    private readonly listTypesUC = new ListInteractionTypesUseCase(),
    private readonly listConfigsUC = new ListInteractionConfigsUseCase(),
    private readonly getConfigUC = new GetInteractionConfigUseCase(),
    private readonly getTimelineUC = new GetVideoTimelineUseCase(),
  ) {}

  async listInteractionTypes(req: Request, res: Response) {
    try {
      const { keyword } = req.query;
      const result = await this.listTypesUC.execute({
        keyword: keyword as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listInteractionTypes error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listInteractionConfigs(req: Request, res: Response) {
    try {
      const { interactionTypeId } = req.query;
      const result = await this.listConfigsUC.execute({
        interactionTypeId: interactionTypeId ? Number(interactionTypeId) : undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listInteractionConfigs error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getInteractionConfig(req: Request, res: Response) {
    try {
      const configId = Number(req.params.configId);
      const result = await this.getConfigUC.execute({ configId });
      if (!result.config) {
        return res.status(404).json({ message: 'Interaction config not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getInteractionConfig error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getVideoTimeline(req: Request, res: Response) {
    try {
      const videoId = Number(req.params.videoId);
      const result = await this.getTimelineUC.execute({ videoId });
      res.json(result);
    } catch (err) {
      console.error('getVideoTimeline error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
