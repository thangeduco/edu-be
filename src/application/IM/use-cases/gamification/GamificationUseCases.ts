// use-cases/gamification/GamificationUseCases.ts

import {
  ListAnimationsInput,
  ListAnimationsOutput,
  ListSoundsInput,
  ListSoundsOutput,
  ListBadgePresetsInput,
  ListBadgePresetsOutput,
} from '../../dtos/GamificationDtos';

// TODO: IAnimationRepository, ISoundRepository, IBadgePresetProvider (hoặc dùng LM.badges)

export class ListAnimationsUseCase {
  constructor(
    // private animationRepo: IAnimationRepository,
  ) {}

  async execute(_input: ListAnimationsInput): Promise<ListAnimationsOutput> {
    // TODO: query im_animations
    return { animations: [] };
  }
}

export class ListSoundsUseCase {
  constructor(
    // private soundRepo: ISoundRepository,
  ) {}

  async execute(_input: ListSoundsInput): Promise<ListSoundsOutput> {
    // TODO: query im_sounds
    return { sounds: [] };
  }
}

export class ListBadgePresetsUseCase {
  constructor(
    // private badgePresetProvider: IBadgePresetProvider,
  ) {}

  async execute(_input: ListBadgePresetsInput): Promise<ListBadgePresetsOutput> {
    // TODO: có thể map sang LM badges hoặc cấu hình cố định
    return { presets: [] };
  }
}
