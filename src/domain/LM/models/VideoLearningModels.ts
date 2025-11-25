// LM/models/VideoLearningModels.ts

export interface LmVideoSession {
  id: number;
  studentId: number;
  videoId: number;
  startSecond: number;
  stopSecond: number;
  startedAt: Date;
  stoppedAt?: Date;
  deviceType?: string;
}

export interface LmVideoProgress {
  id: number;
  studentId: number;
  videoId: number;
  lastWatchSecond: number;
  completionPercent: number;
  timesCompleted: number;
  lastWatchedAt: Date;
}
