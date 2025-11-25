"use strict";
// CM/pg-cm-video.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgVideoLectureRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgVideoLectureRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async findByLessonId(lessonId) {
        // TODO: SELECT ... FROM cm_video_lectures WHERE lesson_id = $1
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        // TODO: SELECT ... FROM cm_video_lectures WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgVideoLectureRepository = PgVideoLectureRepository;
