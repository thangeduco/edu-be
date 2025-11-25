"use strict";
// use-cases/video-learning/VideoLearningUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVideoProgressUseCase = exports.StopVideoSessionUseCase = exports.StartVideoSessionUseCase = void 0;
// TODO: IVideoSessionRepository, IVideoProgressRepository
class StartVideoSessionUseCase {
    constructor(
    // private videoSessionRepo: IVideoSessionRepository,
    ) { }
    async execute(_input) {
        // TODO: insert lm_video_sessions
        return {
            success: true,
            sessionId: 1,
            message: 'StartVideoSessionUseCase not implemented yet',
        };
    }
}
exports.StartVideoSessionUseCase = StartVideoSessionUseCase;
class StopVideoSessionUseCase {
    constructor(
    // private videoSessionRepo: IVideoSessionRepository,
    // private videoProgressRepo: IVideoProgressRepository,
    ) { }
    async execute(_input) {
        // TODO: update lm_video_sessions + upsert lm_video_progress
        return {
            success: true,
            message: 'StopVideoSessionUseCase not implemented yet',
        };
    }
}
exports.StopVideoSessionUseCase = StopVideoSessionUseCase;
class GetVideoProgressUseCase {
    constructor(
    // private videoProgressRepo: IVideoProgressRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_video_progress
        return {
            progress: undefined,
        };
    }
}
exports.GetVideoProgressUseCase = GetVideoProgressUseCase;
