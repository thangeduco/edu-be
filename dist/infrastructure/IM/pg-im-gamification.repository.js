"use strict";
// IM/pg-im-gamification.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbBadgePresetProvider = exports.PgSoundRepository = exports.PgAnimationRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgAnimationRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listAnimations(_keyword) {
        // TODO: SELECT ... FROM im_animations WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgAnimationRepository = PgAnimationRepository;
class PgSoundRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listSounds(_keyword) {
        // TODO: SELECT ... FROM im_sounds WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgSoundRepository = PgSoundRepository;
// Simple bridge to LM badges, hoặc cấu hình sẵn
class DbBadgePresetProvider {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listBadgePresets(_keyword) {
        // TODO: SELECT code, name, description FROM lm_badges WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.DbBadgePresetProvider = DbBadgePresetProvider;
