// CM/pg-cm-worksheet.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { IWorksheetRepository } from '../../domain/CM/repos';
import { CmWorksheet } from '../../domain/CM/models/WorksheetModels'; // Add this import, adjust path if needed

export class PgWorksheetRepository implements IWorksheetRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listByWeekId(_weekId: number): Promise<CmWorksheet[]> {
    // TODO: JOIN cm_worksheets + cm_lessons + cm_course_weeks WHERE course_week_id = $1
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<CmWorksheet> {
    // TODO: SELECT ... FROM cm_worksheets WHERE id = $1
    throw new Error('Method not implemented.');
  }
}
