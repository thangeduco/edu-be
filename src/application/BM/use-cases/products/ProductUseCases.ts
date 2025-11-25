// src/application/BM/use-cases/products/ProductUseCases.ts

import {
  ListProductsInput,
  ListProductsOutput,
  GetProductDetailInput,
  GetProductDetailOutput,
  ListStudentSubscriptionsInput,
  ListStudentSubscriptionsOutput,
} from '../../dtos/ProductDtos';

// TODO: import repo interfaces khi có domain
// import { IProductRepository } from '../../../domain/BM/repos/IProductRepository';
// import { ISubscriptionRepository } from '../../../domain/BM/repos/ISubscriptionRepository';

export class ListProductsUseCase {
  constructor() {}

  async execute(_input: ListProductsInput): Promise<ListProductsOutput> {
    // TODO: query bm_products
    return {
      products: [],
    };
  }
}

export class GetProductDetailUseCase {
  constructor() {}

  async execute(_input: GetProductDetailInput): Promise<GetProductDetailOutput> {
    // TODO: query bm_products by id
    return {
      product: undefined,
    };
  }
}

export class ListStudentSubscriptionsUseCase {
  constructor() {}

  async execute(_input: ListStudentSubscriptionsInput): Promise<ListStudentSubscriptionsOutput> {
    // TODO: query bm_subscriptions by student id
    return {
      subscriptions: [],
    };
  }
}
