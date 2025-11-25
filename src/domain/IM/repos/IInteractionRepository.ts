// IM/repos/IInteractionRepository.ts

import {
  ImInteractionType,
  ImInteractionConfig,
  ImVideoInteraction,
} from '../models/InteractionModels';

export interface IInteractionTypeRepository {
  listTypes(keyword?: string): Promise<ImInteractionType[]>;
  findByCode(code: string): Promise<ImInteractionType | null>;
}

export interface IInteractionConfigRepository {
  listConfigs(filter?: { interactionTypeId?: number }): Promise<ImInteractionConfig[]>;
  findById(id: number): Promise<ImInteractionConfig | null>;
}

export interface IVideoInteractionRepository {
  listByVideoId(videoId: number): Promise<ImVideoInteraction[]>;
  listNextEvents(
    videoId: number,
    currentTimestampSec: number,
  ): Promise<ImVideoInteraction[]>;
  findById(id: number): Promise<ImVideoInteraction | null>;
}
