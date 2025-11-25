// CM/repos/IQuestionRepository.ts

import {
  CmQuestion,
  CmAnswerOption,
  CmWorksheetQuestion,
  CmVideoQuestionLink,
} from '../models/QuestionModels';

export interface IQuestionRepository {
  findById(id: number): Promise<CmQuestion | null>;
  listAnswers(questionId: number): Promise<CmAnswerOption[]>;
  searchQuestions(filter: {
    grade?: string;
    topicTag?: string;
    questionType?: string;
    offset?: number;
    limit?: number;
  }): Promise<{ items: CmQuestion[]; total: number }>;
}

export interface IVideoQuestionLinkRepository {
  listByVideoId(videoId: number): Promise<CmVideoQuestionLink[]>;
}

export interface IWorksheetQuestionRepository {
  listByWorksheetId(worksheetId: number): Promise<CmWorksheetQuestion[]>;
}
