// src/application/LM/dtos/VideoLearningDtos.ts

export interface StartVideoSessionInput {
  studentId: number;
  videoId: number;
  /**
   * Giây bắt đầu xem trong video (tương ứng start_second trong DB).
   * Thường là 0 nếu bắt đầu từ đầu.
   */
  startSecond: number;
  /**
   * Thời điểm bắt đầu xem (optional).
   * Nếu không truyền, backend có thể dùng thời điểm hiện tại (new Date()).
   * Dạng ISO string: "2025-12-02T10:15:00.000Z"
   */
  startedAt?: string;
  /**
   * Thiết bị: WEB, MOBILE, ...
   */
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
