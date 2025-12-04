"use strict";
// src/application/BM/dtos/ProductDtos.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapBmProductToProductResponseDto = mapBmProductToProductResponseDto;
const ProductModels_1 = require("../../../domain/BM/models/ProductModels");
/**
 * Map từ domain BmProduct → ProductResponseDto cho FE
 */
function mapBmProductToProductResponseDto(product) {
    let saleKitParsed = null;
    let saleTermsParsed = null;
    try {
        saleKitParsed = (0, ProductModels_1.parseProductSaleKitFlexible)(product.saleKit);
    }
    catch (err) {
        console.error('[mapBmProductToProductResponseDto] ❌ Lỗi parse saleKit', err);
        saleKitParsed = null;
    }
    try {
        saleTermsParsed = (0, ProductModels_1.parseProductSaleTermsFlexible)(product.saleTerms);
    }
    catch (err) {
        console.error('[mapBmProductToProductResponseDto] ❌ Lỗi parse saleTerms', err);
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
