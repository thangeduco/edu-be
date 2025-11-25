// use-cases/quiz/QuizUseCases.ts

import {
  RecordQuizAttemptInput,
  RecordQuizAttemptOutput,
  GetQuizSummaryInput,
  GetQuizSummaryOutput,
} from '../../dtos/QuizDtos';

// TODO: IQuizAttemptRepository

export class RecordQuizAttemptUseCase {
  constructor(
    // private quizAttemptRepo: IQuizAttemptRepository,
  ) {}

  async execute(_input: RecordQuizAttemptInput): Promise<RecordQuizAttemptOutput> {
    // TODO: insert lm_quiz_attempts, tính is_correct + score
    return {
      success: true,
      attemptId: 1,
      isCorrect: false,
      score: 0,
      message: 'RecordQuizAttemptUseCase not implemented yet',
    };
  }
}

export class GetQuizSummaryUseCase {
  constructor(
    // private quizAttemptRepo: IQuizAttemptRepository,
  ) {}

  async execute(_input: GetQuizSummaryInput): Promise<GetQuizSummaryOutput> {
    // TODO: aggregate lm_quiz_attempts
    return {
      summary: {
        totalAttempts: 0,
        correctCount: 0,
        incorrectCount: 0,
        avgScore: 0,
      },
    };
  }
}
