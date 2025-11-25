"use strict";
// use-cases/video-interactions/RuntimeUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeNextStepUseCase = void 0;
// TODO: dùng repository video_interactions + business LM/IM cho logic thực
class RuntimeNextStepUseCase {
    constructor(
    // private videoInteractionRepo: IVideoInteractionRepository,
    ) { }
    async execute(_input) {
        // TODO:
        //  1. tìm event tiếp theo sau currentTimestampSec
        //  2. dựa vào interaction_type quyết định action: SHOW_QUIZ / JUMP_TO_VIDEO /...
        return {
            action: 'NONE',
        };
    }
}
exports.RuntimeNextStepUseCase = RuntimeNextStepUseCase;
