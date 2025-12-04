// LM/models/VideoLearningModels.ts

// Mapping đúng theo cấu trúc bảng lm_video_sessions
export interface LmVideoSession {
  id: number;
  student_id: number;
  video_id: number;
  started_at: Date;
  ended_at: Date | null;
  start_second: number;
  stop_second: number | null;
  device_type: string | null;
}

// Giả định cấu trúc bảng lm_video_progress tương ứng với các field dưới
export interface LmVideoProgress {
  id: number;
  student_id: number;
  video_id: number;
  last_watch_second: number;
  completion_percent: number;
  times_completed: number;
  last_watched_at: Date;
  created_at: Date;
  updated_at: Date;
}
