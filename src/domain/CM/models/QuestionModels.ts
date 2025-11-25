// CM/models/QuestionModels.ts

export interface CmQuestion {
  id: number;
  sourceType: string; // VIDEO, WORKSHEET
  questionType: string; // MCQ, FILL_BLANK...
  stem: string;
  explanation?: string;
  difficulty?: number;
  grade?: string;
  topicTag?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CmAnswerOption {
  id: number;
  questionId: number;
  orderIndex: number;
  content: string;
  isCorrect: boolean;
}

export interface CmWorksheetQuestion {
  id: number;
  worksheetId: number;
  questionId: number;
  orderIndex: number;
}

export interface CmVideoQuestionLink {
  id: number;
  videoId: number;
  questionId: number;
  triggerSecond: number;
}
