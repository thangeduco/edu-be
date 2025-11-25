// src/application/CM/use-cases/questions/QuestionUseCases.ts

import {
  GetQuestionDetailInput,
  GetQuestionDetailOutput,
  SearchQuestionsInput,
  SearchQuestionsOutput,
  GetVideoQuestionsInput,
  GetVideoQuestionsOutput,
  GetWorksheetQuestionsInput,
  GetWorksheetQuestionsOutput,
} from '../../dtos/QuestionDtos';

// TODO: IQuestionRepository, IVideoQuestionLinkRepository, IWorksheetQuestionRepository

export class GetQuestionDetailUseCase {
  constructor(
    // private questionRepo: IQuestionRepository,
  ) {}

  async execute(_input: GetQuestionDetailInput): Promise<GetQuestionDetailOutput> {
    // TODO: query cm_questions + cm_answer_options
    return {
      question: undefined,
      options: [],
    };
  }
}

export class SearchQuestionsUseCase {
  constructor(
    // private questionRepo: IQuestionRepository,
  ) {}

  async execute(_input: SearchQuestionsInput): Promise<SearchQuestionsOutput> {
    // TODO: filter theo grade/topic/questionType
    return {
      items: [],
      total: 0,
    };
  }
}

export class GetVideoQuestionsUseCase {
  constructor(
    // private videoQuestionLinkRepo: IVideoQuestionLinkRepository,
  ) {}

  async execute(_input: GetVideoQuestionsInput): Promise<GetVideoQuestionsOutput> {
    // TODO: join cm_video_question_links + cm_questions
    return {
      questions: [],
    };
  }
}

export class GetWorksheetQuestionsUseCase {
  constructor(
    // private worksheetQuestionRepo: IWorksheetQuestionRepository,
  ) {}

  async execute(_input: GetWorksheetQuestionsInput): Promise<GetWorksheetQuestionsOutput> {
    // TODO: join cm_worksheet_questions + cm_questions
    return {
      questions: [],
    };
  }
}
