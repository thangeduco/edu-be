// BM/repos/IProductRepository.ts

import { BmProduct, BmSubscription } from '../models/ProductModels';

export interface IProductRepository {
  listProducts(filter?: { type?: string; activeOnly?: boolean }): Promise<BmProduct[]>;
  findById(id: number): Promise<BmProduct | null>;
  findByCode(code: string): Promise<BmProduct | null>;
}

export interface ISubscriptionRepository {
  listSubscriptionsOfStudent(studentId: number): Promise<BmSubscription[]>;
  findById(id: number): Promise<BmSubscription | null>;
  createSubscription(
    sub: Omit<BmSubscription, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<BmSubscription>;
  updateSubscription(sub: BmSubscription): Promise<void>;
}
