"use strict";
// CM/pg-cm-course.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgCourseRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgCourseRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listCourses(_filter) {
        // TODO: SELECT ... FROM cm_courses WHERE ...
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        // TODO: SELECT ... FROM cm_courses WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async listWeeks(_courseId) {
        // TODO: SELECT ... FROM cm_course_weeks WHERE course_id = $1 ORDER BY week_number
        throw new Error('Method not implemented.');
    }
}
exports.PgCourseRepository = PgCourseRepository;
