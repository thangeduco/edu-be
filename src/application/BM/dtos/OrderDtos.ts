// src/application/BM/dtos/OrderDtos.ts

export interface CreateOrderInput {
  parentId: number;
  studentId?: number;
  productId: number;
  paymentMethod?: string;
}

export interface CreateOrderOutput {
  success: boolean;
  orderId?: number;
  orderNumber?: string;
  status?: string;
  message?: string;
}

export interface GetOrderDetailInput {
  orderId: number;
}

export interface OrderDetailDto {
  id: number;
  orderNumber: string;
  parentId: number;
  studentId?: number;
  productId: number;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  paidAt?: string;
}

export interface GetOrderDetailOutput {
  order?: OrderDetailDto;
}

export interface InitPaymentInput {
  orderId: number;
}

export interface InitPaymentOutput {
  success: boolean;
  paymentUrl?: string;
  provider?: string;
  message?: string;
}

export interface PaymentWebhookInput {
  provider: string;
  rawPayload: any;
}

export interface PaymentWebhookOutput {
  success: boolean;
  message?: string;
}

export interface CancelSubscriptionInput {
  subscriptionId: number;
}

export interface CancelSubscriptionOutput {
  success: boolean;
  message?: string;
}

export interface BlockSubscriptionInput {
  subscriptionId: number;
  reason?: string;
}

export interface BlockSubscriptionOutput {
  success: boolean;
  message?: string;
}
