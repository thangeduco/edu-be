// use-cases/video-learning/VideoLearningUseCases.ts

import {
  StartVideoSessionInput,
  StartVideoSessionOutput,
  StopVideoSessionInput,
  StopVideoSessionOutput,
  GetVideoProgressInput,
  GetVideoProgressOutput,
} from '../../dtos/VideoLearningDtos';

// TODO: IVideoSessionRepository, IVideoProgressRepository

export class StartVideoSessionUseCase {
  constructor(
    // private videoSessionRepo: IVideoSessionRepository,
  ) {}

  async execute(_input: StartVideoSessionInput): Promise<StartVideoSessionOutput> {
    // TODO: insert lm_video_sessions
    return {
      success: true,
      sessionId: 1,
      message: 'StartVideoSessionUseCase not implemented yet',
    };
  }
}

export class StopVideoSessionUseCase {
  constructor(
    // private videoSessionRepo: IVideoSessionRepository,
    // private videoProgressRepo: IVideoProgressRepository,
  ) {}

  async execute(_input: StopVideoSessionInput): Promise<StopVideoSessionOutput> {
    // TODO: update lm_video_sessions + upsert lm_video_progress
    return {
      success: true,
      message: 'StopVideoSessionUseCase not implemented yet',
    };
  }
}

export class GetVideoProgressUseCase {
  constructor(
    // private videoProgressRepo: IVideoProgressRepository,
  ) {}

  async execute(_input: GetVideoProgressInput): Promise<GetVideoProgressOutput> {
    // TODO: query lm_video_progress
    return {
      progress: undefined,
    };
  }
}
