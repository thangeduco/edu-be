"use strict";
// use-cases/interaction-configs/InteractionConfigUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInteractionConfigUseCase = exports.ListInteractionConfigsUseCase = void 0;
// TODO: IInteractionConfigRepository
class ListInteractionConfigsUseCase {
    constructor(
    // private interactionConfigRepo: IInteractionConfigRepository,
    ) { }
    async execute(_input) {
        // TODO: query im_interaction_configs
        return { configs: [] };
    }
}
exports.ListInteractionConfigsUseCase = ListInteractionConfigsUseCase;
class GetInteractionConfigUseCase {
    constructor(
    // private interactionConfigRepo: IInteractionConfigRepository,
    ) { }
    async execute(_input) {
        // TODO: query im_interaction_configs by id
        return { config: undefined };
    }
}
exports.GetInteractionConfigUseCase = GetInteractionConfigUseCase;
