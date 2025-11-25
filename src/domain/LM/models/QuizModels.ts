// LM/models/QuizModels.ts

export interface LmQuizAttempt {
  id: number;
  studentId: number;
  questionId: number;
  sourceType: string; // VIDEO, WORKSHEET
  sourceId: number;
  selectedOptionId?: number;
  answerText?: string;
  isCorrect?: boolean;
  score?: number;
  timeSpentSec?: number;
  createdAt: Date;
}
