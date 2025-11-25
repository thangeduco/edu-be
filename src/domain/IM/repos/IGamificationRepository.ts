// IM/repos/IGamificationRepository.ts

import { ImAnimation, ImSound } from '../models/GamificationModels';

export interface IAnimationRepository {
  listAnimations(keyword?: string): Promise<ImAnimation[]>;
}

export interface ISoundRepository {
  listSounds(keyword?: string): Promise<ImSound[]>;
}

// Hoặc có thể implement từ LM badge config
export interface IBadgePresetProvider {
  listBadgePresets(keyword?: string): Promise<{ code: string; name: string; description?: string }[]>;
}
