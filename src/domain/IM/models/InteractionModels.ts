// IM/models/InteractionModels.ts

export interface ImInteractionType {
  id: number;
  code: string; // QUIZ_CHOICE, POPUP_TEXT...
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImInteractionConfig {
  id: number;
  interactionTypeId: number;
  name: string;
  configJson: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImVideoInteraction {
  id: number;
  videoId: number;
  timestampSec: number;
  interactionTypeId: number;
  interactionConfigId?: number;
  questionId?: number;
  nextVideoId?: number;
  extraDataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}
