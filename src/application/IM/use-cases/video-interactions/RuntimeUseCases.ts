// use-cases/video-interactions/RuntimeUseCases.ts

import {
  RuntimeNextStepInput,
  RuntimeNextStepOutput,
} from '../../dtos/RuntimeDtos';

// TODO: dùng repository video_interactions + business LM/IM cho logic thực

export class RuntimeNextStepUseCase {
  constructor(
    // private videoInteractionRepo: IVideoInteractionRepository,
  ) {}

  async execute(_input: RuntimeNextStepInput): Promise<RuntimeNextStepOutput> {
    // TODO:
    //  1. tìm event tiếp theo sau currentTimestampSec
    //  2. dựa vào interaction_type quyết định action: SHOW_QUIZ / JUMP_TO_VIDEO /...
    return {
      action: 'NONE',
    };
  }
}
