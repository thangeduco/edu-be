// CM/pg-cm-course.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  ICourseRepository,
  ICourseWeekRepository,
} from '../../domain/CM/repos';
import { CmCourse } from '../../domain/CM/models/CourseModels'; // Adjust the import path if needed

export class PgCourseRepository implements ICourseRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listCourses(_filter?: { grade?: string; level?: string; status?: string }): Promise<CmCourse[]> {
    // TODO: SELECT ... FROM cm_courses WHERE ...
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<CmCourse> {
    // TODO: SELECT ... FROM cm_courses WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async listWeeks(_courseId: number) {
    // TODO: SELECT ... FROM cm_course_weeks WHERE course_id = $1 ORDER BY week_number
    throw new Error('Method not implemented.');
  }
}
