"use strict";
// use-cases/quiz/QuizUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuizSummaryUseCase = exports.RecordQuizAttemptUseCase = void 0;
// TODO: IQuizAttemptRepository
class RecordQuizAttemptUseCase {
    constructor(
    // private quizAttemptRepo: IQuizAttemptRepository,
    ) { }
    async execute(_input) {
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
exports.RecordQuizAttemptUseCase = RecordQuizAttemptUseCase;
class GetQuizSummaryUseCase {
    constructor(
    // private quizAttemptRepo: IQuizAttemptRepository,
    ) { }
    async execute(_input) {
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
exports.GetQuizSummaryUseCase = GetQuizSummaryUseCase;
