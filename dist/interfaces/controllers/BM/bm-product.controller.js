"use strict";
// src/features/BM/controllers/bm-product.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmProductController = void 0;
const ProductUseCases_1 = require("../../../application/BM/use-cases/products/ProductUseCases");
const pg_bm_product_repository_1 = require("../../../infrastructure/BM/pg-bm-product.repository");
// Khởi tạo repo & usecase đúng chuẩn kiến trúc
const bmProductRepo = new pg_bm_product_repository_1.PgProductRepository();
const productUC = new ProductUseCases_1.ProductUseCases(bmProductRepo);
/**
 * BmProductController
 * Chỉ giữ 1 API duy nhất theo yêu cầu:
 * - GET /api/bm/products/:productCode
 */
exports.bmProductController = {
    /**
     * Lấy thông tin chi tiết của 1 product bằng productCode
     * GET /api/bm/products/:productCode
     */
    async getProductDetailByProductCode(req, res) {
        const productCode = req.params.productCode;
        console.info(`[bmProductController][getProductDetailByProductCode] productCode=${productCode}`);
        if (!productCode || typeof productCode !== 'string') {
            return res.status(400).json({ error: 'productCode không hợp lệ' });
        }
        try {
            const productDto = await productUC.getProductDetailByCode(productCode);
            return res.status(200).json(productDto);
        }
        catch (err) {
            console.error('[bmProductController][getProductDetailByProductCode] ❌ Error', err);
            return res.status(404).json({
                error: err?.message || 'Không tìm thấy sản phẩm'
            });
        }
    }
};
