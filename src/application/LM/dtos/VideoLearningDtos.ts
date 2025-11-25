// dtos/VideoLearningDtos.ts

export interface StartVideoSessionInput {
  studentId: number;
  videoId: number;
  startSecond?: number;
  deviceType?: string;
}

export interface StartVideoSessionOutput {
  success: boolean;
  sessionId?: number;
  message?: string;
}

export interface StopVideoSessionInput {
  sessionId: number;
  stopSecond: number;
}

export interface StopVideoSessionOutput {
  success: boolean;
  message?: string;
}

export interface VideoProgressDto {
  videoId: number;
  studentId: number;
  lastWatchSecond: number;
  completionPercent: number;
  timesCompleted: number;
  lastWatchedAt?: string;
}

export interface GetVideoProgressInput {
  studentId: number;
  videoId: number;
}

export interface GetVideoProgressOutput {
  progress?: VideoProgressDto;
}
