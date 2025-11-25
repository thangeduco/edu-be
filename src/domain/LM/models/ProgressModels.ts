// LM/models/ProgressModels.ts

export interface LmStudentCourseProgress {
  id: number;
  studentId: number;
  courseId: number;
  progressPercent: number;
  videosCompleted: number;
  worksheetsCompleted: number;
  totalScore?: number;
  status: string;
  lastActivityAt: Date;
}

export interface LmWeekProgress {
  id: number;
  studentId: number;
  courseWeekId: number;
  progressPercent: number;
  videosCompleted: number;
  worksheetsCompleted: number;
  status: string;
  lastActivityAt: Date;
}
