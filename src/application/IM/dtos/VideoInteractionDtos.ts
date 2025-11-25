// dtos/VideoInteractionDtos.ts

export interface VideoInteractionEventDto {
  id: number;
  videoId: number;
  timestampSec: number;
  interactionTypeId: number;
  interactionConfigId?: number;
  questionId?: number;
  nextVideoId?: number;
  extraDataJson?: any;
}

export interface GetVideoTimelineInput {
  videoId: number;
}

export interface GetVideoTimelineOutput {
  videoId: number;
  events: VideoInteractionEventDto[];
}
