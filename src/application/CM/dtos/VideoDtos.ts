// src/application/CM/dtos/VideoDtos.ts

export interface VideoDto {
  id: number;
  lessonId: number;
  title: string;
  description?: string;
  videoUrl: string;
  durationSeconds?: number;
  thumbnailUrl?: string;
}

export interface GetLessonVideoInput {
  lessonId: number;
}

export interface GetLessonVideoOutput {
  video?: VideoDto;
}

export interface GetVideoDetailInput {
  videoId: number;
}

export interface GetVideoDetailOutput {
  video?: VideoDto;
}
