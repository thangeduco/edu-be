"use strict";
// CM/pg-cm-question.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgQuestionRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgQuestionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async findById(id) {
        // TODO: SELECT ... FROM cm_questions WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async listAnswers(_questionId) {
        // TODO: SELECT ... FROM cm_answer_options WHERE question_id = $1 ORDER BY order_index
        throw new Error('Method not implemented.');
    }
    async searchQuestions(_filter) {
        // TODO: SELECT ... FROM cm_questions WHERE ... LIMIT/OFFSET ...
        throw new Error('Method not implemented.');
    }
    async listByVideoId(_videoId) {
        // TODO: SELECT ... FROM cm_video_question_links WHERE video_id = $1
        throw new Error('Method not implemented.');
    }
    async listByWorksheetId(_worksheetId) {
        // TODO: SELECT ... FROM cm_worksheet_questions WHERE worksheet_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgQuestionRepository = PgQuestionRepository;
