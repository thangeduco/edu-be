// IM/pg-im-interaction.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IInteractionTypeRepository,
  IInteractionConfigRepository,
  IVideoInteractionRepository,
} from '../../domain/IM/repos';
import { ImInteractionType, ImInteractionConfig, ImVideoInteraction } from '../../domain/IM/models/InteractionModels'; // Add this import, adjust path if needed

export class PgInteractionTypeRepository implements IInteractionTypeRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listTypes(_keyword?: string): Promise<ImInteractionType[]> {
    // TODO: SELECT ... FROM im_interaction_types WHERE ...
    throw new Error('Method not implemented.');
  }

  async findByCode(_code: string): Promise<ImInteractionType> {
    // TODO: SELECT ... FROM im_interaction_types WHERE code = $1
    throw new Error('Method not implemented.');
  }
}

export class PgInteractionConfigRepository implements IInteractionConfigRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listConfigs(_filter?: { interactionTypeId?: number }): Promise<ImInteractionConfig[]> {
    // TODO: SELECT ... FROM im_interaction_configs WHERE ...
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<ImInteractionConfig> {
    // TODO: SELECT ... FROM im_interaction_configs WHERE id = $1
    throw new Error('Method not implemented.');
  }
}

export class PgVideoInteractionRepository implements IVideoInteractionRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listByVideoId(_videoId: number): Promise<ImVideoInteraction[]> {
    // TODO: SELECT ... FROM im_video_interactions WHERE video_id = $1 ORDER BY timestamp_sec
    throw new Error('Method not implemented.');
  }

  async listNextEvents(videoId: number, currentTimestampSec: number): Promise<ImVideoInteraction[]> {
    // TODO: SELECT ... WHERE video_id = $1 AND timestamp_sec > $2 ORDER BY timestamp_sec
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<ImVideoInteraction> {
    // TODO: SELECT ... FROM im_video_interactions WHERE id = $1
    throw new Error('Method not implemented.');
  }
}
