// LM/pg-lm-quiz.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { IQuizAttemptRepository } from '../../domain/LM/repos';
import { LmQuizAttempt } from '../../domain/LM/models/QuizModels';

export class PgQuizAttemptRepository implements IQuizAttemptRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createAttempt(attempt: Omit<LmQuizAttempt, "id" | "createdAt">): Promise<LmQuizAttempt> {
    // TODO: INSERT INTO lm_quiz_attempts ...
    throw new Error('Method not implemented.');
  }

  async listAttempts(_filter: {
    studentId: number;
    courseId?: number;
    fromDate?: Date;
    toDate?: Date;
  }): Promise<LmQuizAttempt[]> {
    // TODO: SELECT ... FROM lm_quiz_attempts WHERE ...
    throw new Error('Method not implemented.');
  }
}
