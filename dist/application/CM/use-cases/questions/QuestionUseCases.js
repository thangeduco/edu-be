"use strict";
// src/application/CM/use-cases/questions/QuestionUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorksheetQuestionsUseCase = exports.GetVideoQuestionsUseCase = exports.SearchQuestionsUseCase = exports.GetQuestionDetailUseCase = void 0;
// TODO: IQuestionRepository, IVideoQuestionLinkRepository, IWorksheetQuestionRepository
class GetQuestionDetailUseCase {
    constructor(
    // private questionRepo: IQuestionRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_questions + cm_answer_options
        return {
            question: undefined,
            options: [],
        };
    }
}
exports.GetQuestionDetailUseCase = GetQuestionDetailUseCase;
class SearchQuestionsUseCase {
    constructor(
    // private questionRepo: IQuestionRepository,
    ) { }
    async execute(_input) {
        // TODO: filter theo grade/topic/questionType
        return {
            items: [],
            total: 0,
        };
    }
}
exports.SearchQuestionsUseCase = SearchQuestionsUseCase;
class GetVideoQuestionsUseCase {
    constructor(
    // private videoQuestionLinkRepo: IVideoQuestionLinkRepository,
    ) { }
    async execute(_input) {
        // TODO: join cm_video_question_links + cm_questions
        return {
            questions: [],
        };
    }
}
exports.GetVideoQuestionsUseCase = GetVideoQuestionsUseCase;
class GetWorksheetQuestionsUseCase {
    constructor(
    // private worksheetQuestionRepo: IWorksheetQuestionRepository,
    ) { }
    async execute(_input) {
        // TODO: join cm_worksheet_questions + cm_questions
        return {
            questions: [],
        };
    }
}
exports.GetWorksheetQuestionsUseCase = GetWorksheetQuestionsUseCase;
