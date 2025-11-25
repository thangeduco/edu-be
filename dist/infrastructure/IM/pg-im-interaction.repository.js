"use strict";
// IM/pg-im-interaction.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgVideoInteractionRepository = exports.PgInteractionConfigRepository = exports.PgInteractionTypeRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgInteractionTypeRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listTypes(_keyword) {
        // TODO: SELECT ... FROM im_interaction_types WHERE ...
        throw new Error('Method not implemented.');
    }
    async findByCode(_code) {
        // TODO: SELECT ... FROM im_interaction_types WHERE code = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgInteractionTypeRepository = PgInteractionTypeRepository;
class PgInteractionConfigRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listConfigs(_filter) {
        // TODO: SELECT ... FROM im_interaction_configs WHERE ...
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM im_interaction_configs WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgInteractionConfigRepository = PgInteractionConfigRepository;
class PgVideoInteractionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listByVideoId(_videoId) {
        // TODO: SELECT ... FROM im_video_interactions WHERE video_id = $1 ORDER BY timestamp_sec
        throw new Error('Method not implemented.');
    }
    async listNextEvents(videoId, currentTimestampSec) {
        // TODO: SELECT ... WHERE video_id = $1 AND timestamp_sec > $2 ORDER BY timestamp_sec
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM im_video_interactions WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgVideoInteractionRepository = PgVideoInteractionRepository;
