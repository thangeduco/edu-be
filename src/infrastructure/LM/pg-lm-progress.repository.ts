// LM/pg-lm-progress.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  ICourseProgressRepository,
  IWeekProgressRepository,
} from '../../domain/LM/repos';
import { LmStudentCourseProgress, LmWeekProgress } from '../../domain/LM/models/ProgressModels'; // Adjust the import path if needed

export class PgCourseProgressRepository implements ICourseProgressRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async getCourseProgress(_studentId: number, _courseId: number): Promise<LmStudentCourseProgress> {
    // TODO: SELECT ... FROM lm_student_course_progress WHERE ...
    throw new Error('Method not implemented.');
  }

  async upsertCourseProgress(progress: Omit<LmStudentCourseProgress, "id">): Promise<LmStudentCourseProgress> {
    // TODO: UPSERT lm_student_course_progress ...
    throw new Error('Method not implemented.');
  }
}

export class PgWeekProgressRepository implements IWeekProgressRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listWeeksProgress(_studentId: number, _courseId: number): Promise<LmWeekProgress[]> {
    // TODO: SELECT ... FROM lm_week_progress WHERE ...
    throw new Error('Method not implemented.');
  }
}
