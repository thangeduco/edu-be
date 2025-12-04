// src/infrastructure/LM/pg-lm-video-learning.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IVideoSessionRepo,
  IVideoProgressRepo,
} from '../../domain/LM/repos';
import {
  LmVideoSession,
  LmVideoProgress,
} from '../../domain/LM/models/VideoLearningModels';

const VIDEO_SESSION_TABLE = 'lm_video_sessions';
const VIDEO_PROGRESS_TABLE = 'lm_video_progress';

/**
 * PgVideoSessionRepository
 * Triển khai IVideoSessionRepo sử dụng Postgres.
 */
export class PgVideoSessionRepository implements IVideoSessionRepo {
  constructor(private readonly pool: Pool = pgPool) {}

  /**
   * Tạo phiên xem video mới.
   * - Trường id sử dụng sequence lm_video_sessions_id_seq
   * - Trả về bản ghi vừa insert.
   */
  async createSession(
  session: Omit<LmVideoSession, 'id'>
): Promise<LmVideoSession> {
  try {
    const sql = `
      INSERT INTO ${VIDEO_SESSION_TABLE} (
        id,
        student_id,
        video_id,
        started_at,
        ended_at,
        start_second,
        stop_second,
        device_type
      ) VALUES (
        nextval('lm_video_sessions_id_seq'),
        $1,
        $2,
        NOW(),           -- 🔥 DB tự set started_at
        $3,
        $4,
        $5,
        $6
      )
      RETURNING
        id,
        student_id,
        video_id,
        started_at,
        ended_at,
        start_second,
        stop_second,
        device_type
    `;

    const params = [
      session.student_id,
      session.video_id,
      session.ended_at ?? null,
      session.start_second,
      session.stop_second ?? null,
      session.device_type ?? null,
    ];

    const result = await this.pool.query(sql, params);

    if (result.rows.length === 0) {
      throw new Error(
        '[PgVideoSessionRepository][createSession] Không insert được bản ghi lm_video_sessions'
      );
    }

    return result.rows[0] as LmVideoSession;
  } catch (err) {
    console.error(
      '[PgVideoSessionRepository][createSession] ❌ Lỗi khi tạo phiên xem video',
      { error: err, session }
    );
    throw err;
  }
}


  /**
   * Cập nhật phiên xem video khi kết thúc:
   * - ended_at = NOW() (DB time)
   * - stop_second = giá trị client gửi lên
   * - updated_at = NOW()
   */
  async updateSession(
    session: Partial<LmVideoSession> & { id: number }
  ): Promise<void> {
    try {
      const sql = `
        UPDATE ${VIDEO_SESSION_TABLE}
        SET
          ended_at = NOW(),
          stop_second = $1
        WHERE id = $2
      `;

      const params = [
        session.stop_second ?? null,
        session.id,
      ];

      const result = await this.pool.query(sql, params);

      if (result.rowCount === 0) {
        console.warn(
          '[PgVideoSessionRepository][updateSession] ⚠️ Không tìm thấy session để update',
          { session }
        );
      }
    } catch (err) {
      console.error(
        '[PgVideoSessionRepository][updateSession] ❌ Lỗi khi update phiên xem video',
        { error: err, session }
      );
      throw err;
    }
  }
}

/**
 * PgVideoProgressRepository
 * Triển khai IVideoProgressRepo sử dụng Postgres.
 */
export class PgVideoProgressRepository implements IVideoProgressRepo {
  constructor(private readonly pool: Pool = pgPool) {}

  async getProgress(
    _studentId: number,
    _videoId: number
  ): Promise<LmVideoProgress> {
    // TODO: SELECT ... FROM lm_video_progress WHERE student_id = $1 AND video_id = $2
    throw new Error('Method not implemented.');
  }

  async upsertProgress(
    progress: Omit<LmVideoProgress, 'id'>
  ): Promise<LmVideoProgress> {
    // TODO: UPSERT lm_video_progress ...
    // const sql = `
    //   INSERT INTO ${VIDEO_PROGRESS_TABLE} (...)
    //   VALUES (...)
    //   ON CONFLICT (student_id, video_id) DO UPDATE SET ...
    //   RETURNING *
    // `;
    // const result = await this.pool.query(sql, [...]);
    // return result.rows[0] as LmVideoProgress;
    throw new Error('Method not implemented.');
  }
}
