// BM/pg-bm-product.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IProductRepository,
  ISubscriptionRepository,
} from '../../domain/BM/repos';
import { BmProduct, BmSubscription } from '../../domain/BM/models/ProductModels'; // Adjust the path if needed

export class PgProductRepository implements IProductRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listProducts(_filter?: { type?: string; activeOnly?: boolean }): Promise<BmProduct[]> {
    // TODO: SELECT ... FROM bm_products WHERE ...
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<BmProduct> {
    // TODO: SELECT ... FROM bm_products WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async findByCode(_code: string): Promise<BmProduct> {
    // TODO: SELECT ... FROM bm_products WHERE code = $1
    throw new Error('Method not implemented.');
  }
}

export class PgSubscriptionRepository implements ISubscriptionRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listSubscriptionsOfStudent(_studentId: number): Promise<BmSubscription[]> {
    // TODO: SELECT ... FROM bm_subscriptions WHERE student_id = $1
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<BmSubscription> {
    // TODO: SELECT ... FROM bm_subscriptions WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async createSubscription(sub: Omit<BmSubscription, "id" | "createdAt" | "updatedAt">): Promise<BmSubscription> {
    // TODO: INSERT INTO bm_subscriptions ...
    throw new Error('Method not implemented.');
  }

  async updateSubscription(_sub: any): Promise<void> {
    // TODO: UPDATE bm_subscriptions ...
    throw new Error('Method not implemented.');
  }
}
