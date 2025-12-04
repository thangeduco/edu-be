// src/features/BM/usecases/ProductUseCases.ts

import { IProductRepo } from "../../../../domain/BM/repos/IProductRepo";
import {
  ProductResponseDto,
  mapBmProductToProductResponseDto,
} from "../../dtos/ProductDtos";

/**
 * Use Case: GetProductDetailUC
 * Lấy thông tin chi tiết của một sản phẩm dựa vào productCode
 */
export class ProductUseCases {
  constructor(private repo: IProductRepo) {}

  async getProductDetailByCode(productCode: string): Promise<ProductResponseDto> {
    console.info(`[getProductDetailByCode] Lấy chi tiết sản phẩm: ${productCode}`);

    const product = await this.repo.findByProductCode(productCode);

    if (!product) {
      throw new Error(`Không tìm thấy sản phẩm với mã: ${productCode}`);
    }

    // Map sang DTO chuẩn
    const dto = mapBmProductToProductResponseDto(product);

    return dto;
  }
}
