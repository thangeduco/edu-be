// use-cases/interaction-configs/InteractionConfigUseCases.ts

import {
  ListInteractionConfigsInput,
  ListInteractionConfigsOutput,
  GetInteractionConfigInput,
  GetInteractionConfigOutput,
} from '../../dtos/InteractionDtos';

// TODO: IInteractionConfigRepository

export class ListInteractionConfigsUseCase {
  constructor(
    // private interactionConfigRepo: IInteractionConfigRepository,
  ) {}

  async execute(_input: ListInteractionConfigsInput): Promise<ListInteractionConfigsOutput> {
    // TODO: query im_interaction_configs
    return { configs: [] };
  }
}

export class GetInteractionConfigUseCase {
  constructor(
    // private interactionConfigRepo: IInteractionConfigRepository,
  ) {}

  async execute(_input: GetInteractionConfigInput): Promise<GetInteractionConfigOutput> {
    // TODO: query im_interaction_configs by id
    return { config: undefined };
  }
}
