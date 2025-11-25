// LM/pg-lm-worksheet.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { IWorksheetSubmissionRepository } from '../../domain/LM/repos/IWorksheetSubmissionRepository';
import { LmWorksheetSubmission } from '../../domain/LM/models/WorksheetModels';

export class PgWorksheetSubmissionRepository implements IWorksheetSubmissionRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createSubmission(sub: Omit<LmWorksheetSubmission, "id" | "submittedAt" | "gradedAt">): Promise<LmWorksheetSubmission> {
    // TODO: INSERT INTO lm_worksheet_submissions ...
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<LmWorksheetSubmission> {
    // TODO: SELECT ... FROM lm_worksheet_submissions WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async listStudentSubmissions(_studentId: number, _worksheetId?: number): Promise<LmWorksheetSubmission[]> {
    // TODO: SELECT ... FROM lm_worksheet_submissions WHERE student_id = $1 [AND worksheet_id = $2]
    throw new Error('Method not implemented.');
  }

  async listForTeacher(_filter: { teacherId: number; status?: string }): Promise<LmWorksheetSubmission[]> {
    // TODO: SELECT ... FROM lm_worksheet_submissions WHERE teacher_id = $1 ...
    throw new Error('Method not implemented.');
  }

  async updateSubmission(_sub: any): Promise<void> {
    // TODO: UPDATE lm_worksheet_submissions ...
    throw new Error('Method not implemented.');
  }
}
