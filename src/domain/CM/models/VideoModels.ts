// CM/models/VideoModels.ts

export interface CmVideoLecture {
  id: number;
  lessonId: number;
  title: string;
  description?: string;
  videoUrl: string;
  durationSeconds?: number;
  thumbnailUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
