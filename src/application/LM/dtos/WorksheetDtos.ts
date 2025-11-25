// dtos/WorksheetDtos.ts

export interface SubmitWorksheetInput {
  studentId: number;
  worksheetId: number;
  mode: string; // ONLINE / UPLOAD
  fileUrl?: string;
  answersJson?: any;
}

export interface SubmitWorksheetOutput {
  success: boolean;
  submissionId?: number;
  message?: string;
}

export interface WorksheetSubmissionDto {
  id: number;
  studentId: number;
  worksheetId: number;
  attemptNo: number;
  mode: string;
  fileUrl?: string;
  autoScore?: number;
  teacherScore?: number;
  finalScore?: number;
  status: string;
  submittedAt?: string;
  gradedAt?: string;
}

export interface GetWorksheetSubmissionInput {
  worksheetId: number;
  submissionId: number;
}

export interface GetWorksheetSubmissionOutput {
  submission?: WorksheetSubmissionDto;
}

export interface ListStudentSubmissionsInput {
  studentId: number;
  worksheetId?: number;
}

export interface ListStudentSubmissionsOutput {
  submissions: WorksheetSubmissionDto[];
}

export interface ListSubmissionsForTeacherInput {
  teacherId: number;
  status?: string;
}

export interface ListSubmissionsForTeacherOutput {
  submissions: WorksheetSubmissionDto[];
}

export interface GradeWorksheetInput {
  teacherId: number;
  worksheetId: number;
  submissionId: number;
  teacherScore: number;
  finalScore?: number;
  teacherFeedback?: string;
}

export interface GradeWorksheetOutput {
  success: boolean;
  message?: string;
}

export interface ListWorksheetResultsForStudentInput {
  studentId: number;
}

export interface ListWorksheetResultsForStudentOutput {
  submissions: WorksheetSubmissionDto[];
}
