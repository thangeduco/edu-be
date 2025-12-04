// src/infrastructure/BM/pg-bm-product.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';

import {
  IProductRepo,
  ISubscriptionRepo,
} from '../../domain/BM/repos';

import {
  BmProduct,
  BmSubscription,
} from '../../domain/BM/models/ProductModels';

const PRODUCT_TABLE = 'bm_products';
const SUBSCRIPTION_TABLE = 'bm_subscriptions';

/**
 * PgProductRepository
 * Triển khai IProductRepo sử dụng Postgres cho bảng bm_products
 */
export class PgProductRepository implements IProductRepo {
  constructor(private readonly pool: Pool = pgPool) {}

  /**
   * Lấy danh sách product với filter đơn giản theo type & activeOnly
   */
  async listProducts(filter?: {
    type?: string;
    activeOnly?: boolean;
  }): Promise<BmProduct[]> {
    try {
      const conditions: string[] = [];
      const params: any[] = [];

      if (filter?.type) {
        params.push(filter.type);
        conditions.push(`product_type = $${params.length}`);
      }

      if (filter?.activeOnly) {
        conditions.push(`is_active = TRUE`);
      }

      const whereClause = conditions.length
        ? `WHERE ${conditions.join(' AND ')}`
        : '';

      const sql = `
        SELECT
          product_id,
          product_code,
          product_name,
          product_type,
          description,
          price,
          currency,
          billing_cycle,
          is_active,
          trial_days,
          created_at,
          updated_at,
          sale_kit,
          sale_terms
        FROM ${PRODUCT_TABLE}
        ${whereClause}
        ORDER BY product_id ASC
      `;

      const result = await this.pool.query(sql, params);
      return result.rows.map((row) => this.mapRowToBmProduct(row));
    } catch (err) {
      console.error(
        '[PgProductRepository][listProducts] ❌ Lỗi khi truy vấn bm_products',
        { error: err, filter }
      );
      throw err;
    }
  }

  /**
   * Tìm product theo productId (bm_products.product_id)
   */
  async findByProductId(productId: number): Promise<BmProduct> {
    try {
      const sql = `
        SELECT
          product_id,
          product_code,
          product_name,
          product_type,
          description,
          price,
          currency,
          billing_cycle,
          is_active,
          trial_days,
          created_at,
          updated_at,
          sale_kit,
          sale_terms
        FROM ${PRODUCT_TABLE}
        WHERE product_id = $1
        LIMIT 1
      `;

      const result = await this.pool.query(sql, [productId]);

      if (result.rows.length === 0) {
        throw new Error(`Product not found with id=${productId}`);
      }

      return this.mapRowToBmProduct(result.rows[0]);
    } catch (err) {
      console.error(
        '[PgProductRepository][findByProductId] ❌ Lỗi khi truy vấn bm_products',
        { error: err, productId }
      );
      throw err;
    }
  }

  /**
   * Tìm product theo productCode (bm_products.product_code)
   */
  async findByProductCode(productCode: string): Promise<BmProduct> {
    try {
      const sql = `
        SELECT
          product_id,
          product_code,
          product_name,
          product_type,
          description,
          price,
          currency,
          billing_cycle,
          is_active,
          trial_days,
          created_at,
          updated_at,
          sale_kit,
          sale_terms
        FROM ${PRODUCT_TABLE}
        WHERE product_code = $1
          AND is_active = TRUE
        LIMIT 1
      `;

      const result = await this.pool.query(sql, [productCode]);

      if (result.rows.length === 0) {
        throw new Error(`Product not found with code=${productCode}`);
      }

      return this.mapRowToBmProduct(result.rows[0]);
    } catch (err) {
      console.error(
        '[PgProductRepository][findByProductCode] ❌ Lỗi khi truy vấn bm_products',
        { error: err, productCode }
      );
      throw err;
    }
  }

  /**
   * Map 1 row từ bm_products sang BmProduct domain model
   */
  private mapRowToBmProduct(row: any): BmProduct {
    return {
      productId: row.product_id,
      productCode: row.product_code,
      productName: row.product_name,
      productType: row.product_type,
      description: row.description ?? undefined,
      price: Number(row.price),
      currency: row.currency,
      billingCycle: row.billing_cycle ?? undefined,
      isActive: Boolean(row.is_active),
      trialDays: row.trial_days ?? undefined,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      saleKit: row.sale_kit ?? null,
      saleTerms: row.sale_terms ?? null,
    };
  }
}

/**
 * PgSubscriptionRepository
 * Triển khai ISubscriptionRepo sử dụng Postgres cho bảng bm_subscriptions
 */
export class PgSubscriptionRepository implements ISubscriptionRepo {
  constructor(private readonly pool: Pool = pgPool) {}

  /**
   * Lấy danh sách subscription của 1 học sinh (student_id)
   */
  async listSubscriptionsOfStudent(studentId: number): Promise<BmSubscription[]> {
    try {
      const sql = `
        SELECT
          id,
          student_id,
          product_id,
          status,
          trial_start_at,
          trial_end_at,
          start_at,
          end_at,
          auto_renew,
          blocked_reason,
          created_at,
          updated_at
        FROM ${SUBSCRIPTION_TABLE}
        WHERE student_id = $1
        ORDER BY created_at DESC
      `;

      const result = await this.pool.query(sql, [studentId]);
      return result.rows.map((row) => this.mapRowToBmSubscription(row));
    } catch (err) {
      console.error(
        '[PgSubscriptionRepository][listSubscriptionsOfStudent] ❌ Lỗi khi truy vấn bm_subscriptions',
        { error: err, studentId }
      );
      throw err;
    }
  }

  /**
   * Tìm subscription theo id
   */
  async findBySubscriptionId(id: number): Promise<BmSubscription> {
    try {
      const sql = `
        SELECT
          id,
          student_id,
          product_id,
          status,
          trial_start_at,
          trial_end_at,
          start_at,
          end_at,
          auto_renew,
          blocked_reason,
          created_at,
          updated_at
        FROM ${SUBSCRIPTION_TABLE}
        WHERE id = $1
        LIMIT 1
      `;

      const result = await this.pool.query(sql, [id]);

      if (result.rows.length === 0) {
        throw new Error(`Subscription not found with id=${id}`);
      }

      return this.mapRowToBmSubscription(result.rows[0]);
    } catch (err) {
      console.error(
        '[PgSubscriptionRepository][findBySubscriptionId] ❌ Lỗi khi truy vấn bm_subscriptions',
        { error: err, id }
      );
      throw err;
    }
  }

  /**
   * Tạo mới 1 subscription
   * - Sử dụng sequence bm_subscriptions_id_seq cho id
   * - created_at, updated_at = NOW() (DB time)
   */
  async createSubscription(
    sub: Omit<BmSubscription, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<BmSubscription> {
    try {
      const sql = `
        INSERT INTO ${SUBSCRIPTION_TABLE} (
          id,
          student_id,
          product_id,
          status,
          trial_start_at,
          trial_end_at,
          start_at,
          end_at,
          auto_renew,
          blocked_reason,
          created_at,
          updated_at
        ) VALUES (
          nextval('bm_subscriptions_id_seq'),
          $1, $2, $3,
          $4, $5,
          $6, $7,
          $8,
          $9,
          NOW(),
          NOW()
        )
        RETURNING
          id,
          student_id,
          product_id,
          status,
          trial_start_at,
          trial_end_at,
          start_at,
          end_at,
          auto_renew,
          blocked_reason,
          created_at,
          updated_at
      `;

      const params = [
        sub.studentId,
        sub.productId,
        sub.status,
        sub.trialStartAt ?? null,
        sub.trialEndAt ?? null,
        sub.startAt ?? null,
        sub.endAt ?? null,
        sub.autoRenew,
        sub.blockedReason ?? null,
      ];

      const result = await this.pool.query(sql, params);

      if (result.rows.length === 0) {
        throw new Error(
          '[PgSubscriptionRepository][createSubscription] Không insert được bản ghi bm_subscriptions'
        );
      }

      return this.mapRowToBmSubscription(result.rows[0]);
    } catch (err) {
      console.error(
        '[PgSubscriptionRepository][createSubscription] ❌ Lỗi khi tạo subscription',
        { error: err, sub }
      );
      throw err;
    }
  }

  /**
   * Cập nhật subscription
   * (cho phép partial update; các field không truyền vào sẽ giữ nguyên)
   */
  async updateSubscription(
    sub: Partial<BmSubscription> & { id: number }
  ): Promise<void> {
    try {
      const sql = `
        UPDATE ${SUBSCRIPTION_TABLE}
        SET
          status = COALESCE($1, status),
          trial_start_at = COALESCE($2, trial_start_at),
          trial_end_at = COALESCE($3, trial_end_at),
          start_at = COALESCE($4, start_at),
          end_at = COALESCE($5, end_at),
          auto_renew = COALESCE($6, auto_renew),
          blocked_reason = COALESCE($7, blocked_reason),
          updated_at = NOW()
        WHERE id = $8
      `;

      const params = [
        sub.status ?? null,
        sub.trialStartAt ?? null,
        sub.trialEndAt ?? null,
        sub.startAt ?? null,
        sub.endAt ?? null,
        typeof sub.autoRenew === 'boolean' ? sub.autoRenew : null,
        sub.blockedReason ?? null,
        sub.id,
      ];

      const result = await this.pool.query(sql, params);

      if (result.rowCount === 0) {
        console.warn(
          '[PgSubscriptionRepository][updateSubscription] ⚠️ Không tìm thấy subscription để update',
          { sub }
        );
      }
    } catch (err) {
      console.error(
        '[PgSubscriptionRepository][updateSubscription] ❌ Lỗi khi update subscription',
        { error: err, sub }
      );
      throw err;
    }
  }

  /**
   * Map 1 row từ bm_subscriptions sang BmSubscription domain model
   */
  private mapRowToBmSubscription(row: any): BmSubscription {
    return {
      id: row.id,
      studentId: row.student_id,
      productId: row.product_id,
      status: row.status,
      trialStartAt: row.trial_start_at ?? undefined,
      trialEndAt: row.trial_end_at ?? undefined,
      startAt: row.start_at ?? undefined,
      endAt: row.end_at ?? undefined,
      autoRenew: Boolean(row.auto_renew),
      blockedReason: row.blocked_reason ?? null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
