"use strict";
// LM/pg-lm-progress.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgWeekProgressRepository = exports.PgCourseProgressRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgCourseProgressRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async getCourseProgress(_studentId, _courseId) {
        // TODO: SELECT ... FROM lm_student_course_progress WHERE ...
        throw new Error('Method not implemented.');
    }
    async upsertCourseProgress(progress) {
        // TODO: UPSERT lm_student_course_progress ...
        throw new Error('Method not implemented.');
    }
}
exports.PgCourseProgressRepository = PgCourseProgressRepository;
class PgWeekProgressRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listWeeksProgress(_studentId, _courseId) {
        // TODO: SELECT ... FROM lm_week_progress WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgWeekProgressRepository = PgWeekProgressRepository;
