"use strict";
// LM/pg-lm-worksheet.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgWorksheetSubmissionRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgWorksheetSubmissionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createSubmission(sub) {
        // TODO: INSERT INTO lm_worksheet_submissions ...
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM lm_worksheet_submissions WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async listStudentSubmissions(_studentId, _worksheetId) {
        // TODO: SELECT ... FROM lm_worksheet_submissions WHERE student_id = $1 [AND worksheet_id = $2]
        throw new Error('Method not implemented.');
    }
    async listForTeacher(_filter) {
        // TODO: SELECT ... FROM lm_worksheet_submissions WHERE teacher_id = $1 ...
        throw new Error('Method not implemented.');
    }
    async updateSubmission(_sub) {
        // TODO: UPDATE lm_worksheet_submissions ...
        throw new Error('Method not implemented.');
    }
}
exports.PgWorksheetSubmissionRepository = PgWorksheetSubmissionRepository;
