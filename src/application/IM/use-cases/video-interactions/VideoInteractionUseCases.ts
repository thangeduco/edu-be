// use-cases/video-interactions/VideoInteractionUseCases.ts

import {
  GetVideoTimelineInput,
  GetVideoTimelineOutput,
} from '../../dtos/VideoInteractionDtos';

// TODO: IVideoInteractionRepository

export class GetVideoTimelineUseCase {
  constructor(
    // private videoInteractionRepo: IVideoInteractionRepository,
  ) {}

  async execute(input: GetVideoTimelineInput): Promise<GetVideoTimelineOutput> {
    // TODO: query im_video_interactions by video_id
    return {
      videoId: input.videoId,
      events: [],
    };
  }
}
