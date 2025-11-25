"use strict";
// src/application/CM/use-cases/videos/VideoUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVideoDetailUseCase = exports.GetLessonVideoUseCase = void 0;
// TODO: IVideoLectureRepository
class GetLessonVideoUseCase {
    constructor(
    // private videoRepo: IVideoLectureRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_video_lectures by lesson_id
        return { video: undefined };
    }
}
exports.GetLessonVideoUseCase = GetLessonVideoUseCase;
class GetVideoDetailUseCase {
    constructor(
    // private videoRepo: IVideoLectureRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_video_lectures by id
        return { video: undefined };
    }
}
exports.GetVideoDetailUseCase = GetVideoDetailUseCase;
