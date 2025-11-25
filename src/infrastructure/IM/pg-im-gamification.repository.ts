// IM/pg-im-gamification.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IAnimationRepository,
  ISoundRepository,
  IBadgePresetProvider,
} from '../../domain/IM/repos';
import { ImAnimation, ImSound } from '../../domain/IM/models/GamificationModels'; // Add this import, adjust path if needed

export class PgAnimationRepository implements IAnimationRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listAnimations(_keyword?: string): Promise<ImAnimation[]> {
    // TODO: SELECT ... FROM im_animations WHERE ...
    throw new Error('Method not implemented.');
  }
}

export class PgSoundRepository implements ISoundRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listSounds(_keyword?: string): Promise<ImSound[]> {
    // TODO: SELECT ... FROM im_sounds WHERE ...
    throw new Error('Method not implemented.');
  }
}

// Simple bridge to LM badges, hoặc cấu hình sẵn
export class DbBadgePresetProvider implements IBadgePresetProvider {
  constructor(private readonly pool: Pool = pgPool) {}

  async listBadgePresets(_keyword?: string): Promise<{ code: string; name: string; description?: string }[]> {
    // TODO: SELECT code, name, description FROM lm_badges WHERE ...
    throw new Error('Method not implemented.');
  }
}
