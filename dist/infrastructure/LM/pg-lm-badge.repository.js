"use strict";
// LM/pg-lm-badge.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgStudentBadgeRepository = exports.PgBadgeRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgBadgeRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async findByCode(_code) {
        // TODO: SELECT ... FROM lm_badges WHERE code = $1
        throw new Error('Method not implemented.');
    }
    async listBadges() {
        // TODO: SELECT ... FROM lm_badges
        throw new Error('Method not implemented.');
    }
}
exports.PgBadgeRepository = PgBadgeRepository;
class PgStudentBadgeRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async awardBadge(sb) {
        // TODO: INSERT INTO lm_student_badges ...
        throw new Error('Method not implemented.');
    }
    async listBadgesOfStudent(_studentId) {
        // TODO: SELECT ... FROM lm_student_badges WHERE student_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgStudentBadgeRepository = PgStudentBadgeRepository;
