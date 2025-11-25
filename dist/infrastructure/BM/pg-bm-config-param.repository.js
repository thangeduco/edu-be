"use strict";
// src/infrastructure/BM/bm-pg-config-param.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgBMConfigParamRepository = void 0;
const pgClient_1 = require("../db/pgClient");
const bm_config_param_model_1 = require("../../domain/BM/models/bm-config-param.model");
const TABLE_NAME = 'bm_config_param';
/**
 * PgBMConfigParamRepository
 * Triển khai BMConfigParamRepository sử dụng Postgres.
 */
class PgBMConfigParamRepository {
    /**
     * Lấy param_value dạng JSON thô từ DB.
     */
    async findRawParamValue(paramKey) {
        try {
            const sql = `
        SELECT param_value
        FROM ${TABLE_NAME}
        WHERE param_key = $1
          AND status = 1
        ORDER BY created_at DESC
        LIMIT 1
      `;
            const result = await pgClient_1.pgPool.query(sql, [paramKey]);
            if (result.rows.length === 0)
                return null;
            const raw = result.rows[0].param_value;
            return raw ?? null;
        }
        catch (err) {
            console.error('[PgBMConfigParamRepository][findRawParamValue] ❌ Lỗi khi truy vấn bm_config_param', err);
            throw err;
        }
    }
    async findHomePageCourses() {
        const raw = await this.findRawParamValue('HOME_PAGE_COURSES');
        if (!raw)
            return [];
        try {
            return (0, bm_config_param_model_1.parseHomePageCourses)(raw);
        }
        catch (err) {
            console.error('[PgBMConfigParamRepository][findHomePageCourses] ❌ Parse lỗi HOME_PAGE_COURSES', err);
            return [];
        }
    }
    async findHomePageImageSlide() {
        const raw = await this.findRawParamValue('HOME_PAGE_IMAGE_SLICE');
        if (!raw)
            return [];
        try {
            return (0, bm_config_param_model_1.parseHomePageImageSlide)(raw);
        }
        catch (err) {
            console.error('[PgBMConfigParamRepository][findHomePageImageSlide] ❌ Parse lỗi HOME_PAGE_IMAGE_SLIDE', err);
            return [];
        }
    }
    async findHomePageQAs() {
        const raw = await this.findRawParamValue('HOME_PAGE_QAS');
        if (!raw)
            return [];
        try {
            return (0, bm_config_param_model_1.parseHomePageQAs)(raw);
        }
        catch (err) {
            console.error('[PgBMConfigParamRepository][findHomePageQAs] ❌ Parse lỗi HOME_PAGE_QAS', err);
            return [];
        }
    }
    async findHomePageAchievement() {
        const raw = await this.findRawParamValue('HOME_PAGE_ACHIEVEMENT');
        if (!raw)
            return null;
        try {
            return (0, bm_config_param_model_1.parseHomePageAchievement)(raw);
        }
        catch (err) {
            console.error('[PgBMConfigParamRepository][findHomePageAchievement] ❌ Parse lỗi HOME_PAGE_ACHIEVEMENT', err);
            return null;
        }
    }
}
exports.PgBMConfigParamRepository = PgBMConfigParamRepository;
