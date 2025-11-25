// LM/models/WorksheetModels.ts

export interface LmWorksheetSubmission {
  id: number;
  studentId: number;
  worksheetId: number;
  attemptNo: number;
  mode: string; // ONLINE, UPLOAD
  fileUrl?: string;
  answersJson?: any;
  autoScore?: number;
  teacherScore?: number;
  finalScore?: number;
  status: string; // SUBMITTED, GRADED...
  teacherId?: number;
  submittedAt: Date;
  gradedAt?: Date;
  teacherFeedback?: string;
}
