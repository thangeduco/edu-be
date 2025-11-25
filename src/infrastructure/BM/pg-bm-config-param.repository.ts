// src/infrastructure/BM/bm-pg-config-param.repository.ts

import { pgPool } from '../db/pgClient';

import {
  HomePageCourses,
  parseHomePageCourses,
  HomePageImageSlide,
  parseHomePageImageSlide,
  HomePageQAs,
  parseHomePageQAs,
  HomePageAchievement,
  parseHomePageAchievement,
} from '../../domain/BM/models/bm-config-param.model';

import { IBMConfigParamRepo } from '../../domain/BM/repos/ibm-config-param.repo';

const TABLE_NAME = 'bm_config_param';

/**
 * PgBMConfigParamRepository
 * Triển khai BMConfigParamRepository sử dụng Postgres.
 */
export class PgBMConfigParamRepository implements IBMConfigParamRepo {
  /**
   * Lấy param_value dạng JSON thô từ DB.
   */
  private async findRawParamValue(
    paramKey: string
  ): Promise<any | null> {
    try {
      const sql = `
        SELECT param_value
        FROM ${TABLE_NAME}
        WHERE param_key = $1
          AND status = 1
        ORDER BY created_at DESC
        LIMIT 1
      `;

      const result = await pgPool.query(sql, [paramKey]);
      if (result.rows.length === 0) return null;

      const raw = result.rows[0].param_value;
      return raw ?? null;
    } catch (err) {
      console.error(
        '[PgBMConfigParamRepository][findRawParamValue] ❌ Lỗi khi truy vấn bm_config_param',
        err
      );
      throw err;
    }
  }


  async findHomePageCourses(): Promise<HomePageCourses | null> {
    const raw = await this.findRawParamValue('HOME_PAGE_COURSES');
    if (!raw) return [];

    try {
      return parseHomePageCourses(raw);
    } catch (err) {
      console.error(
        '[PgBMConfigParamRepository][findHomePageCourses] ❌ Parse lỗi HOME_PAGE_COURSES',
        err
      );
      return [];
    }
  }

  async findHomePageImageSlide(): Promise<HomePageImageSlide | null> {
    const raw = await this.findRawParamValue('HOME_PAGE_IMAGE_SLICE');
    if (!raw) return [];

    try {
      return parseHomePageImageSlide(raw);
    } catch (err) {
      console.error(
        '[PgBMConfigParamRepository][findHomePageImageSlide] ❌ Parse lỗi HOME_PAGE_IMAGE_SLIDE',
        err
      );
      return [];
    }
  }

  async findHomePageQAs(): Promise<HomePageQAs | null> {
    const raw = await this.findRawParamValue('HOME_PAGE_QAS');
    if (!raw) return [];

    try {
      return parseHomePageQAs(raw);
    } catch (err) {
      console.error(
        '[PgBMConfigParamRepository][findHomePageQAs] ❌ Parse lỗi HOME_PAGE_QAS',
        err
      );
      return [];
    }
  }

  async findHomePageAchievement(): Promise<HomePageAchievement | null> {
    const raw = await this.findRawParamValue('HOME_PAGE_ACHIEVEMENT');
    if (!raw) return null;

    try {
      return parseHomePageAchievement(raw);
    } catch (err) {
      console.error(
        '[PgBMConfigParamRepository][findHomePageAchievement] ❌ Parse lỗi HOME_PAGE_ACHIEVEMENT',
        err
      );
      return null;
    }
  } 

  // ================= END CONFIG HOMEPAGE ======================
}
