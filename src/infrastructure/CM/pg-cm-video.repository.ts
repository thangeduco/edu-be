// CM/pg-cm-video.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { IVideoLectureRepository } from '../../domain/CM/repos';
import { CmVideoLecture } from '../../domain/CM/models/VideoModels'; // Add this import, adjust path if needed
export class PgVideoLectureRepository implements IVideoLectureRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async findByLessonId(lessonId: number): Promise<CmVideoLecture> {
    // TODO: SELECT ... FROM cm_video_lectures WHERE lesson_id = $1
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<CmVideoLecture> {
    // TODO: SELECT ... FROM cm_video_lectures WHERE id = $1
    throw new Error('Method not implemented.');
  }
}
