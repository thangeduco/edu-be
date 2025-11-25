// dtos/InteractionDtos.ts

export interface InteractionTypeDto {
  id: number;
  code: string;
  name: string;
  description?: string;
}

export interface ListInteractionTypesInput {
  keyword?: string;
}

export interface ListInteractionTypesOutput {
  types: InteractionTypeDto[];
}

export interface InteractionConfigDto {
  id: number;
  interactionTypeId: number;
  name: string;
  configJson: any;
}

export interface ListInteractionConfigsInput {
  interactionTypeId?: number;
}

export interface ListInteractionConfigsOutput {
  configs: InteractionConfigDto[];
}

export interface GetInteractionConfigInput {
  configId: number;
}

export interface GetInteractionConfigOutput {
  config?: InteractionConfigDto;
}
