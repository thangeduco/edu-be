// BM/repos/IProductRepository.ts

import { BmProduct, BmSubscription } from '../models/ProductModels';

export interface IProductRepo {
  listProducts(filter?: { type?: string; activeOnly?: boolean }): Promise<BmProduct[]>;
  findByProductId(productId: number): Promise<BmProduct | null>;
  findByProductCode(productCode: string): Promise<BmProduct | null>;
}

export interface ISubscriptionRepo {
  listSubscriptionsOfStudent(studentId: number): Promise<BmSubscription[]>;
  findBySubscriptionId(id: number): Promise<BmSubscription | null>;
  createSubscription(
    sub: Omit<BmSubscription, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<BmSubscription>;
  updateSubscription(sub: BmSubscription): Promise<void>;
}
