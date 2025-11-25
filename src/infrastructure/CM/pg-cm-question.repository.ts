// CM/pg-cm-question.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IQuestionRepository,
  IVideoQuestionLinkRepository,
  IWorksheetQuestionRepository,
} from '../../domain/CM/repos';
import { CmQuestion, CmAnswerOption, CmVideoQuestionLink, CmWorksheetQuestion } from '../../domain/CM/models/QuestionModels'; // Adjust the path if needed

export class PgQuestionRepository
  implements IQuestionRepository, IVideoQuestionLinkRepository, IWorksheetQuestionRepository
{
  constructor(private readonly pool: Pool = pgPool) {}

  async findById(id: number): Promise<CmQuestion> {
    // TODO: SELECT ... FROM cm_questions WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async listAnswers(_questionId: number): Promise<CmAnswerOption[]> {
    // TODO: SELECT ... FROM cm_answer_options WHERE question_id = $1 ORDER BY order_index
    throw new Error('Method not implemented.');
  }

  async searchQuestions(_filter: {
    grade?: string;
    topicTag?: string;
    questionType?: string;
    offset?: number;
    limit?: number;
  }): Promise<{ items: CmQuestion[]; total: number; }> {
    // TODO: SELECT ... FROM cm_questions WHERE ... LIMIT/OFFSET ...
    throw new Error('Method not implemented.');
  }

  async listByVideoId(_videoId: number): Promise<CmVideoQuestionLink[]> {
    // TODO: SELECT ... FROM cm_video_question_links WHERE video_id = $1
    throw new Error('Method not implemented.');
  }

  async listByWorksheetId(_worksheetId: number): Promise<CmWorksheetQuestion[]> {
    // TODO: SELECT ... FROM cm_worksheet_questions WHERE worksheet_id = $1
    throw new Error('Method not implemented.');
  }
}
