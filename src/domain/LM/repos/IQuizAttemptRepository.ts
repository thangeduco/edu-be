// LM/repos/IQuizAttemptRepository.ts

import { LmQuizAttempt } from '../models/QuizModels';

export interface IQuizAttemptRepository {
  createAttempt(attempt: Omit<LmQuizAttempt, 'id' | 'createdAt'>): Promise<LmQuizAttempt>;
  listAttempts(filter: {
    studentId: number;
    courseId?: number;
    fromDate?: Date;
    toDate?: Date;
  }): Promise<LmQuizAttempt[]>;
}
