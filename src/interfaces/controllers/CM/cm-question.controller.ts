// controllers/CM/cm-question.controller.ts

import { Request, Response } from 'express';
import {
  GetQuestionDetailUseCase,
  SearchQuestionsUseCase,
  GetVideoQuestionsUseCase,
  GetWorksheetQuestionsUseCase,
} from '../../../application/CM/use-cases/questions/QuestionUseCases';

export class CmQuestionController {
  constructor(
    private readonly getQuestionDetailUC = new GetQuestionDetailUseCase(),
    private readonly searchQuestionsUC = new SearchQuestionsUseCase(),
    private readonly getVideoQuestionsUC = new GetVideoQuestionsUseCase(),
    private readonly getWorksheetQuestionsUC = new GetWorksheetQuestionsUseCase(),
  ) {}

  async getQuestionDetail(req: Request, res: Response) {
    try {
      const questionId = Number(req.params.questionId);
      const result = await this.getQuestionDetailUC.execute({ questionId });
      if (!result.question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getQuestionDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async searchQuestions(req: Request, res: Response) {
    try {
      const { grade, topicTag, questionType, page, pageSize } = req.query;
      const result = await this.searchQuestionsUC.execute({
        grade: grade as string | undefined,
        topicTag: topicTag as string | undefined,
        questionType: questionType as string | undefined,
        page: page ? Number(page) : undefined,
        pageSize: pageSize ? Number(pageSize) : undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('searchQuestions error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getVideoQuestions(req: Request, res: Response) {
    try {
      const videoId = Number(req.params.videoId);
      const result = await this.getVideoQuestionsUC.execute({ videoId });
      res.json(result);
    } catch (err) {
      console.error('getVideoQuestions error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getWorksheetQuestions(req: Request, res: Response) {
    try {
      const worksheetId = Number(req.params.worksheetId);
      const result = await this.getWorksheetQuestionsUC.execute({ worksheetId });
      res.json(result);
    } catch (err) {
      console.error('getWorksheetQuestions error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
