// LM/pg-lm-ranking-report.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IRankingRepository,
  IWeeklyReportRepository,
} from '../../domain/LM/repos';
import { LmRankingDaily, LmWeeklyReport } from '../../domain/LM/models/RankingReportModels'; // Adjust the path if needed

export class PgRankingRepository implements IRankingRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listCourseRankings(_courseId: number, _date: Date): Promise<LmRankingDaily[]> {
    // TODO: SELECT ... FROM lm_rankings_daily WHERE scope_type='COURSE' AND scope_id=$1 AND date=$2
    throw new Error('Method not implemented.');
  }

  async listGroupRankings(_groupId: number, _date: Date): Promise<LmRankingDaily[]> {
    // TODO: SELECT ... FROM lm_rankings_daily WHERE scope_type='GROUP' AND scope_id=$1 AND date=$2
    throw new Error('Method not implemented.');
  }
}

export class PgWeeklyReportRepository implements IWeeklyReportRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listStudentReports(_studentId: number, _courseId?: number): Promise<LmWeeklyReport[]> {
    // TODO: SELECT ... FROM lm_weekly_reports WHERE student_id = $1 [...]
    throw new Error('Method not implemented.');
  }

  async listParentReports(_parentId: number, _studentId: number, _courseId?: number): Promise<LmWeeklyReport[]> {
    // TODO: SELECT ... FROM lm_weekly_reports WHERE parent_id=$1 AND student_id=$2 [...]
    throw new Error('Method not implemented.');
  }
}
