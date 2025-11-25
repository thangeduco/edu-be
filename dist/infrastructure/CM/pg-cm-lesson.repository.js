"use strict";
// CM/pg-cm-lesson.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgLessonRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgLessonRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listLessonsByWeek(_weekId) {
        // TODO: SELECT ... FROM cm_lessons WHERE course_week_id = $1 ORDER BY order_index
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        // TODO: SELECT ... FROM cm_lessons WHERE id = $1
        // Example implementation:
        const result = await this.pool.query('SELECT * FROM cm_lessons WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            throw new Error(`Lesson with id ${id} not found`);
        }
        // Assuming CmLesson can be constructed from result.rows[0]
        return result.rows[0];
    }
}
exports.PgLessonRepository = PgLessonRepository;
