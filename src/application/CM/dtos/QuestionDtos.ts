// src/application/CM/dtos/QuestionDtos.ts

export interface QuestionDto {
  id: number;
  sourceType: string;
  questionType: string;
  stem: string;
  explanation?: string;
  difficulty?: number;
  grade?: string;
  topicTag?: string;
}

export interface AnswerOptionDto {
  id: number;
  orderIndex: number;
  content: string;
  isCorrect: boolean;
}

export interface GetQuestionDetailInput {
  questionId: number;
}

export interface GetQuestionDetailOutput {
  question?: QuestionDto;
  options?: AnswerOptionDto[];
}

export interface SearchQuestionsInput {
  grade?: string;
  topicTag?: string;
  questionType?: string;
  page?: number;
  pageSize?: number;
}

export interface SearchQuestionsOutput {
  items: QuestionDto[];
  total: number;
}

export interface GetVideoQuestionsInput {
  videoId: number;
}

export interface GetVideoQuestionsOutput {
  questions: QuestionDto[];
}

export interface GetWorksheetQuestionsInput {
  worksheetId: number;
}

export interface GetWorksheetQuestionsOutput {
  questions: QuestionDto[];
}
