"use strict";
// src/application/BM/use-cases/payments/PaymentUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSubscriptionUseCase = exports.CancelSubscriptionUseCase = exports.PaymentWebhookUseCase = exports.InitPaymentUseCase = exports.GetOrderDetailUseCase = exports.CreateOrderUseCase = void 0;
// TODO: import repo & service interfaces khi anh tạo domain
// import { IOrderRepository } from '../../../domain/BM/repos/IOrderRepository';
// import { IPaymentProviderService } from '../../../domain/BM/repos/IPaymentProviderService';
// import { ISubscriptionRepository } from '../../../domain/BM/repos/ISubscriptionRepository';
class CreateOrderUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: validate, tính amount, insert bm_orders
        return {
            success: true,
            orderId: 1,
            orderNumber: 'ORD000001',
            status: 'PENDING',
            message: 'CreateOrderUseCase not implemented yet',
        };
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
class GetOrderDetailUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: query bm_orders by id
        return { order: undefined };
    }
}
exports.GetOrderDetailUseCase = GetOrderDetailUseCase;
class InitPaymentUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: gọi provider, tạo payment session
        return {
            success: true,
            paymentUrl: 'https://example-payment-gateway/checkout/123',
            provider: 'MOMO',
            message: 'InitPaymentUseCase not implemented yet',
        };
    }
}
exports.InitPaymentUseCase = InitPaymentUseCase;
class PaymentWebhookUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: parse payload, update bm_orders & bm_payment_transactions, active subscription
        return {
            success: true,
            message: 'PaymentWebhookUseCase not implemented yet',
        };
    }
}
exports.PaymentWebhookUseCase = PaymentWebhookUseCase;
class CancelSubscriptionUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: cập nhật bm_subscriptions.status = CANCELED
        return {
            success: true,
            message: 'CancelSubscriptionUseCase not implemented yet',
        };
    }
}
exports.CancelSubscriptionUseCase = CancelSubscriptionUseCase;
class BlockSubscriptionUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: cập nhật bm_subscriptions.status = BLOCKED
        return {
            success: true,
            message: 'BlockSubscriptionUseCase not implemented yet',
        };
    }
}
exports.BlockSubscriptionUseCase = BlockSubscriptionUseCase;
