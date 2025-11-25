"use strict";
// CM/pg-cm-worksheet.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgWorksheetRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgWorksheetRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listByWeekId(_weekId) {
        // TODO: JOIN cm_worksheets + cm_lessons + cm_course_weeks WHERE course_week_id = $1
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM cm_worksheets WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgWorksheetRepository = PgWorksheetRepository;
