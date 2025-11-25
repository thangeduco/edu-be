// src/application/BM/use-cases/payments/PaymentUseCases.ts

import {
  CreateOrderInput,
  CreateOrderOutput,
  GetOrderDetailInput,
  GetOrderDetailOutput,
  InitPaymentInput,
  InitPaymentOutput,
  PaymentWebhookInput,
  PaymentWebhookOutput,
  CancelSubscriptionInput,
  CancelSubscriptionOutput,
  BlockSubscriptionInput,
  BlockSubscriptionOutput,
} from '../../dtos/OrderDtos';

// TODO: import repo & service interfaces khi anh tạo domain
// import { IOrderRepository } from '../../../domain/BM/repos/IOrderRepository';
// import { IPaymentProviderService } from '../../../domain/BM/repos/IPaymentProviderService';
// import { ISubscriptionRepository } from '../../../domain/BM/repos/ISubscriptionRepository';

export class CreateOrderUseCase {
  constructor() {}

  async execute(_input: CreateOrderInput): Promise<CreateOrderOutput> {
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

export class GetOrderDetailUseCase {
  constructor() {}

  async execute(_input: GetOrderDetailInput): Promise<GetOrderDetailOutput> {
    // TODO: query bm_orders by id
    return { order: undefined };
  }
}

export class InitPaymentUseCase {
  constructor() {}

  async execute(_input: InitPaymentInput): Promise<InitPaymentOutput> {
    // TODO: gọi provider, tạo payment session
    return {
      success: true,
      paymentUrl: 'https://example-payment-gateway/checkout/123',
      provider: 'MOMO',
      message: 'InitPaymentUseCase not implemented yet',
    };
  }
}

export class PaymentWebhookUseCase {
  constructor() {}

  async execute(_input: PaymentWebhookInput): Promise<PaymentWebhookOutput> {
    // TODO: parse payload, update bm_orders & bm_payment_transactions, active subscription
    return {
      success: true,
      message: 'PaymentWebhookUseCase not implemented yet',
    };
  }
}

export class CancelSubscriptionUseCase {
  constructor() {}

  async execute(_input: CancelSubscriptionInput): Promise<CancelSubscriptionOutput> {
    // TODO: cập nhật bm_subscriptions.status = CANCELED
    return {
      success: true,
      message: 'CancelSubscriptionUseCase not implemented yet',
    };
  }
}

export class BlockSubscriptionUseCase {
  constructor() {}

  async execute(_input: BlockSubscriptionInput): Promise<BlockSubscriptionOutput> {
    // TODO: cập nhật bm_subscriptions.status = BLOCKED
    return {
      success: true,
      message: 'BlockSubscriptionUseCase not implemented yet',
    };
  }
}
