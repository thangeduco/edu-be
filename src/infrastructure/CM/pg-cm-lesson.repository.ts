// CM/pg-cm-lesson.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { ILessonRepository } from '../../domain/CM/repos';
import { CmLesson } from '../../domain/CM/models/LessonModels'; // Add this import or adjust the path as needed

export class PgLessonRepository implements ILessonRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listLessonsByWeek(_weekId: number): Promise<CmLesson[]> {
    // TODO: SELECT ... FROM cm_lessons WHERE course_week_id = $1 ORDER BY order_index
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<CmLesson> {
    // TODO: SELECT ... FROM cm_lessons WHERE id = $1
    // Example implementation:
    const result = await this.pool.query(
      'SELECT * FROM cm_lessons WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      throw new Error(`Lesson with id ${id} not found`);
    }
    // Assuming CmLesson can be constructed from result.rows[0]
    return result.rows[0] as CmLesson;
  }
}
