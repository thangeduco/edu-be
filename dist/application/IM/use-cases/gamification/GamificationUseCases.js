"use strict";
// use-cases/gamification/GamificationUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBadgePresetsUseCase = exports.ListSoundsUseCase = exports.ListAnimationsUseCase = void 0;
// TODO: IAnimationRepository, ISoundRepository, IBadgePresetProvider (hoặc dùng LM.badges)
class ListAnimationsUseCase {
    constructor(
    // private animationRepo: IAnimationRepository,
    ) { }
    async execute(_input) {
        // TODO: query im_animations
        return { animations: [] };
    }
}
exports.ListAnimationsUseCase = ListAnimationsUseCase;
class ListSoundsUseCase {
    constructor(
    // private soundRepo: ISoundRepository,
    ) { }
    async execute(_input) {
        // TODO: query im_sounds
        return { sounds: [] };
    }
}
exports.ListSoundsUseCase = ListSoundsUseCase;
class ListBadgePresetsUseCase {
    constructor(
    // private badgePresetProvider: IBadgePresetProvider,
    ) { }
    async execute(_input) {
        // TODO: có thể map sang LM badges hoặc cấu hình cố định
        return { presets: [] };
    }
}
exports.ListBadgePresetsUseCase = ListBadgePresetsUseCase;
