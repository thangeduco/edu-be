"use strict";
// LM/pg-lm-quiz.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgQuizAttemptRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgQuizAttemptRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createAttempt(attempt) {
        // TODO: INSERT INTO lm_quiz_attempts ...
        throw new Error('Method not implemented.');
    }
    async listAttempts(_filter) {
        // TODO: SELECT ... FROM lm_quiz_attempts WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgQuizAttemptRepository = PgQuizAttemptRepository;
