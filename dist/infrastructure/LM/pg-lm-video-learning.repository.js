"use strict";
// LM/pg-lm-video-learning.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgVideoProgressRepository = exports.PgVideoSessionRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgVideoSessionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createSession(session) {
        // TODO: INSERT INTO lm_video_sessions ...
        // Example placeholder implementation:
        // const result = await this.pool.query('INSERT INTO lm_video_sessions (...) VALUES (...) RETURNING *', [...]);
        // return result.rows[0] as LmVideoSession;
        throw new Error('Method not implemented.');
    }
    async updateSession(_session) {
        // TODO: UPDATE lm_video_sessions ...
        throw new Error('Method not implemented.');
    }
}
exports.PgVideoSessionRepository = PgVideoSessionRepository;
class PgVideoProgressRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async getProgress(_studentId, _videoId) {
        // TODO: SELECT ... FROM lm_video_progress WHERE student_id = $1 AND video_id = $2
        throw new Error('Method not implemented.');
    }
    async upsertProgress(progress) {
        // TODO: UPSERT lm_video_progress ...
        // Example placeholder implementation:
        // const result = await this.pool.query('INSERT INTO lm_video_progress (...) VALUES (...) ON CONFLICT (...) DO UPDATE SET ... RETURNING *', [...]);
        // return result.rows[0] as LmVideoProgress;
        throw new Error('Method not implemented.');
    }
}
exports.PgVideoProgressRepository = PgVideoProgressRepository;
