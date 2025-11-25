"use strict";
// src/application/BM/use-cases/products/ProductUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStudentSubscriptionsUseCase = exports.GetProductDetailUseCase = exports.ListProductsUseCase = void 0;
// TODO: import repo interfaces khi có domain
// import { IProductRepository } from '../../../domain/BM/repos/IProductRepository';
// import { ISubscriptionRepository } from '../../../domain/BM/repos/ISubscriptionRepository';
class ListProductsUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: query bm_products
        return {
            products: [],
        };
    }
}
exports.ListProductsUseCase = ListProductsUseCase;
class GetProductDetailUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: query bm_products by id
        return {
            product: undefined,
        };
    }
}
exports.GetProductDetailUseCase = GetProductDetailUseCase;
class ListStudentSubscriptionsUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: query bm_subscriptions by student id
        return {
            subscriptions: [],
        };
    }
}
exports.ListStudentSubscriptionsUseCase = ListStudentSubscriptionsUseCase;
