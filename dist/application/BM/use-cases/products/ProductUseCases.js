"use strict";
// src/features/BM/usecases/ProductUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUseCases = void 0;
const ProductDtos_1 = require("../../dtos/ProductDtos");
/**
 * Use Case: GetProductDetailUC
 * Lấy thông tin chi tiết của một sản phẩm dựa vào productCode
 */
class ProductUseCases {
    constructor(repo) {
        this.repo = repo;
    }
    async getProductDetailByCode(productCode) {
        console.info(`[getProductDetailByCode] Lấy chi tiết sản phẩm: ${productCode}`);
        const product = await this.repo.findByProductCode(productCode);
        if (!product) {
            throw new Error(`Không tìm thấy sản phẩm với mã: ${productCode}`);
        }
        // Map sang DTO chuẩn
        const dto = (0, ProductDtos_1.mapBmProductToProductResponseDto)(product);
        return dto;
    }
}
exports.ProductUseCases = ProductUseCases;
