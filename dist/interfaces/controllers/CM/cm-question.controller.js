"use strict";
// controllers/CM/cm-question.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmQuestionController = void 0;
const QuestionUseCases_1 = require("../../../application/CM/use-cases/questions/QuestionUseCases");
class CmQuestionController {
    constructor(getQuestionDetailUC = new QuestionUseCases_1.GetQuestionDetailUseCase(), searchQuestionsUC = new QuestionUseCases_1.SearchQuestionsUseCase(), getVideoQuestionsUC = new QuestionUseCases_1.GetVideoQuestionsUseCase(), getWorksheetQuestionsUC = new QuestionUseCases_1.GetWorksheetQuestionsUseCase()) {
        this.getQuestionDetailUC = getQuestionDetailUC;
        this.searchQuestionsUC = searchQuestionsUC;
        this.getVideoQuestionsUC = getVideoQuestionsUC;
        this.getWorksheetQuestionsUC = getWorksheetQuestionsUC;
    }
    async getQuestionDetail(req, res) {
        try {
            const questionId = Number(req.params.questionId);
            const result = await this.getQuestionDetailUC.execute({ questionId });
            if (!result.question) {
                return res.status(404).json({ message: 'Question not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getQuestionDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async searchQuestions(req, res) {
        try {
            const { grade, topicTag, questionType, page, pageSize } = req.query;
            const result = await this.searchQuestionsUC.execute({
                grade: grade,
                topicTag: topicTag,
                questionType: questionType,
                page: page ? Number(page) : undefined,
                pageSize: pageSize ? Number(pageSize) : undefined,
            });
            res.json(result);
        }
        catch (err) {
            console.error('searchQuestions error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getVideoQuestions(req, res) {
        try {
            const videoId = Number(req.params.videoId);
            const result = await this.getVideoQuestionsUC.execute({ videoId });
            res.json(result);
        }
        catch (err) {
            console.error('getVideoQuestions error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getWorksheetQuestions(req, res) {
        try {
            const worksheetId = Number(req.params.worksheetId);
            const result = await this.getWorksheetQuestionsUC.execute({ worksheetId });
            res.json(result);
        }
        catch (err) {
            console.error('getWorksheetQuestions error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmQuestionController = CmQuestionController;
