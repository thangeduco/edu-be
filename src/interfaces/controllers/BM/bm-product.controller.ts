// src/features/BM/controllers/bm-product.controller.ts

import { Request, Response } from 'express';

import { ProductUseCases } from '../../../application/BM/use-cases/products/ProductUseCases';
import { PgProductRepository } from '../../../infrastructure/BM/pg-bm-product.repository';

// Khởi tạo repo & usecase đúng chuẩn kiến trúc
const bmProductRepo = new PgProductRepository();
const productUC = new ProductUseCases(bmProductRepo);

/**
 * BmProductController
 * Chỉ giữ 1 API duy nhất theo yêu cầu:
 * - GET /api/bm/products/:productCode
 */
export const bmProductController = {

  /**
   * Lấy thông tin chi tiết của 1 product bằng productCode
   * GET /api/bm/products/:productCode
   */
  async getProductDetailByProductCode(req: Request, res: Response) {
    const productCode = req.params.productCode;

    console.info(
      `[bmProductController][getProductDetailByProductCode] productCode=${productCode}`
    );

    if (!productCode || typeof productCode !== 'string') {
      return res.status(400).json({ error: 'productCode không hợp lệ' });
    }

    try {
      const productDto = await productUC.getProductDetailByCode(productCode);

      return res.status(200).json(productDto);

    } catch (err: any) {
      console.error(
        '[bmProductController][getProductDetailByProductCode] ❌ Error',
        err
      );

      return res.status(404).json({
        error: err?.message || 'Không tìm thấy sản phẩm'
      });
    }
  }

};
