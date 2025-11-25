"use strict";
// LM/pg-lm-ranking-report.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgWeeklyReportRepository = exports.PgRankingRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgRankingRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listCourseRankings(_courseId, _date) {
        // TODO: SELECT ... FROM lm_rankings_daily WHERE scope_type='COURSE' AND scope_id=$1 AND date=$2
        throw new Error('Method not implemented.');
    }
    async listGroupRankings(_groupId, _date) {
        // TODO: SELECT ... FROM lm_rankings_daily WHERE scope_type='GROUP' AND scope_id=$1 AND date=$2
        throw new Error('Method not implemented.');
    }
}
exports.PgRankingRepository = PgRankingRepository;
class PgWeeklyReportRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listStudentReports(_studentId, _courseId) {
        // TODO: SELECT ... FROM lm_weekly_reports WHERE student_id = $1 [...]
        throw new Error('Method not implemented.');
    }
    async listParentReports(_parentId, _studentId, _courseId) {
        // TODO: SELECT ... FROM lm_weekly_reports WHERE parent_id=$1 AND student_id=$2 [...]
        throw new Error('Method not implemented.');
    }
}
exports.PgWeeklyReportRepository = PgWeeklyReportRepository;
