// src/application/CM/use-cases/videos/VideoUseCases.ts

import {
  GetLessonVideoInput,
  GetLessonVideoOutput,
  GetVideoDetailInput,
  GetVideoDetailOutput,
} from '../../dtos/VideoDtos';

// TODO: IVideoLectureRepository

export class GetLessonVideoUseCase {
  constructor(
    // private videoRepo: IVideoLectureRepository,
  ) {}

  async execute(_input: GetLessonVideoInput): Promise<GetLessonVideoOutput> {
    // TODO: query cm_video_lectures by lesson_id
    return { video: undefined };
  }
}

export class GetVideoDetailUseCase {
  constructor(
    // private videoRepo: IVideoLectureRepository,
  ) {}

  async execute(_input: GetVideoDetailInput): Promise<GetVideoDetailOutput> {
    // TODO: query cm_video_lectures by id
    return { video: undefined };
  }
}
