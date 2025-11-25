// use-cases/interaction-types/InteractionTypeUseCases.ts

import {
  ListInteractionTypesInput,
  ListInteractionTypesOutput,
} from '../../dtos/InteractionDtos';

// TODO: IInteractionTypeRepository

export class ListInteractionTypesUseCase {
  constructor(
    // private interactionTypeRepo: IInteractionTypeRepository,
  ) {}

  async execute(_input: ListInteractionTypesInput): Promise<ListInteractionTypesOutput> {
    // TODO: query im_interaction_types
    return { types: [] };
  }
}
