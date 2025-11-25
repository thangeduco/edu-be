// src/application/BM/dtos/ProductDtos.ts

export interface ProductSummaryDto {
  id: number;
  code: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  billingCycle?: string;
  isActive: boolean;
}

export interface ListProductsInput {
  type?: string;
  activeOnly?: boolean;
}

export interface ListProductsOutput {
  products: ProductSummaryDto[];
}

export interface GetProductDetailInput {
  productId: number;
}

export interface ProductDetailDto extends ProductSummaryDto {
  description?: string;
  trialDays?: number;
}

export interface GetProductDetailOutput {
  product?: ProductDetailDto;
}

export interface SubscriptionSummaryDto {
  id: number;
  productId: number;
  productName: string;
  status: string;
  trialStartAt?: string;
  trialEndAt?: string;
  startAt?: string;
  endAt?: string;
}

export interface ListStudentSubscriptionsInput {
  studentId: number;
}

export interface ListStudentSubscriptionsOutput {
  subscriptions: SubscriptionSummaryDto[];
}
