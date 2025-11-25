"use strict";
// use-cases/video-interactions/VideoInteractionUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVideoTimelineUseCase = void 0;
// TODO: IVideoInteractionRepository
class GetVideoTimelineUseCase {
    constructor(
    // private videoInteractionRepo: IVideoInteractionRepository,
    ) { }
    async execute(input) {
        // TODO: query im_video_interactions by video_id
        return {
            videoId: input.videoId,
            events: [],
        };
    }
}
exports.GetVideoTimelineUseCase = GetVideoTimelineUseCase;
