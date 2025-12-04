// src/application/BM/dtos/ProductDtos.ts

import {
  BmProduct,
  ProductSaleKit,
  ProductSaleTerms,
  parseProductSaleKitFlexible,
  parseProductSaleTermsFlexible,
} from '../../../domain/BM/models/ProductModels';

/**
 * DTO trả về chi tiết sản phẩm cho FE
 */
export interface ProductResponseDto {
  productId: number;
  productCode: string;
  productName: string;
  productType: string;
  description?: string;
  price: number;
  currency: string;
  billingCycle?: string;
  isActive: boolean;
  trialDays?: number;

  /**
   * Cấu trúc saleKit đã parse chuẩn domain
   */
  saleKit: ProductSaleKit | null;

  /**
   * Cấu trúc saleTerms đã parse chuẩn domain
   */
  saleTerms: ProductSaleTerms | null;
}

/**
 * Map từ domain BmProduct → ProductResponseDto cho FE
 */
export function mapBmProductToProductResponseDto(
  product: BmProduct
): ProductResponseDto {
  let saleKitParsed: ProductSaleKit | null = null;
  let saleTermsParsed: ProductSaleTerms | null = null;

  try {
    saleKitParsed = parseProductSaleKitFlexible(product.saleKit);
  } catch (err) {
    console.error(
      '[mapBmProductToProductResponseDto] ❌ Lỗi parse saleKit',
      err
    );
    saleKitParsed = null;
  }

  try {
    saleTermsParsed = parseProductSaleTermsFlexible(product.saleTerms);
  } catch (err) {
    console.error(
      '[mapBmProductToProductResponseDto] ❌ Lỗi parse saleTerms',
      err
    );
    saleTermsParsed = null;
  }

  return {
    productId: product.productId,
    productCode: product.productCode,
    productName: product.productName,
    productType: product.productType,
    description: product.description,
    price: product.price,
    currency: product.currency,
    billingCycle: product.billingCycle,
    isActive: product.isActive,
    trialDays: product.trialDays,
    saleKit: saleKitParsed,
    saleTerms: saleTermsParsed,
  };
}

/* -------------------------------------------------------------------------- */
/*                       DTOs cho use case Subscribe Product                  */
/* -------------------------------------------------------------------------- */

/**
 * Input đăng ký học chính thức (đã thanh toán)
 */
export interface SubscribePaidCourseInput {
  studentId: number;
  productCode: string;

  /**
   * Có tự động gia hạn hay không (mặc định true)
   */
  autoRenew?: boolean;

  /**
   * Thời điểm bắt đầu gói chính thức.
   * Nếu không truyền, sẽ dùng thời điểm hiện tại (new Date()).
   */
  startAt?: Date;

  /**
   * Thời điểm hết hạn gói (optional - tuỳ anh tính theo billingCycle hoặc để null)
   */
  endAt?: Date | null;
}

/**
 * Input đăng ký học thử (TRIAL)
 */
export interface SubscribeTrialCourseInput {
  studentId: number;
  productCode: string;

  /**
   * Có tự động gia hạn sau khi convert sang gói chính thức hay không.
   * Trong phase này có thể default = false.
   */
  autoRenew?: boolean;

  /**
   * Nếu muốn override số ngày trial mặc định trong product.trialDays
   * thì truyền vào. Nếu không truyền sẽ dùng trialDays của product.
   */
  trialDaysOverride?: number;
}

/**
 * Output chung khi đăng ký/subscription thành công
 */
export interface SubscribeCourseResult {
  subscriptionId: number;
  status: string; // TRIAL, ACTIVE, ...
  studentId: number;
  productId: number;
  productCode: string;

  trialStartAt?: Date;
  trialEndAt?: Date;
  startAt?: Date;
  endAt?: Date | null;
}
