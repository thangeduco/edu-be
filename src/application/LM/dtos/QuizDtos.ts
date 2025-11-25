// dtos/QuizDtos.ts

export interface RecordQuizAttemptInput {
  studentId: number;
  questionId: number;
  sourceType: string; // VIDEO / WORKSHEET
  sourceId: number;
  selectedOptionId?: number;
  answerText?: string;
  timeSpentSec?: number;
}

export interface RecordQuizAttemptOutput {
  success: boolean;
  attemptId?: number;
  isCorrect?: boolean;
  score?: number;
  message?: string;
}

export interface QuizSummaryDto {
  totalAttempts: number;
  correctCount: number;
  incorrectCount: number;
  avgScore?: number;
}

export interface GetQuizSummaryInput {
  studentId: number;
  courseId?: number;
  fromDate?: string;
  toDate?: string;
}

export interface GetQuizSummaryOutput {
  summary: QuizSummaryDto;
}
