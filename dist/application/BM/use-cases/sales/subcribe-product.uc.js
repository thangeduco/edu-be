"use strict";
// src/application/BM/use-cases/sales/subcribe-product.uc.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeProductUC = void 0;
/**
 * Use Case: SubscribeProductUC
 * Xử lý đăng ký khoá học:
 *  1. Đăng ký học chính thức (đã thanh toán)
 *  2. Đăng ký học thử (trial)
 */
class SubscribeProductUC {
    constructor(productRepo, subscriptionRepo) {
        this.productRepo = productRepo;
        this.subscriptionRepo = subscriptionRepo;
    }
    /**
     * Đăng ký học chính thức (đã thanh toán).
     * Flow:
     *  - Tìm product theo productCode
     *  - Tạo subscription với status = 'ACTIVE'
     *  - trial_* để null
     *  - start_at = input.startAt || now
     *  - end_at = input.endAt || null (anh có thể calc theo billingCycle sau)
     */
    async subscribePaidCourse(input) {
        const { studentId, productCode } = input;
        console.info(`[SubscribeProductUC][subscribePaidCourse] 👉 studentId=${studentId}, productCode=${productCode}`);
        if (!studentId || !productCode) {
            throw new Error('studentId và productCode là bắt buộc');
        }
        // 1. Lấy thông tin product
        const product = await this.productRepo.findByProductCode(productCode);
        if (!product || !product.productId) {
            throw new Error(`Không tìm thấy product với code=${productCode}`);
        }
        // 2. Tính toán thời gian bắt đầu / kết thúc
        const now = new Date();
        const startAt = input.startAt ?? now;
        // TODO: Sau này anh có thể tính endAt theo billingCycle (MONTHLY, YEARLY...)
        const endAt = input.endAt ?? null;
        const status = 'ACTIVE';
        const autoRenew = input.autoRenew ?? true;
        // 3. Gọi repo tạo subscription
        const createdSub = await this.subscriptionRepo.createSubscription({
            studentId,
            productId: product.productId,
            status,
            trialStartAt: undefined,
            trialEndAt: undefined,
            startAt,
            endAt,
            autoRenew,
            blockedReason: null,
        });
        // 4. Map sang DTO output
        const result = {
            subscriptionId: createdSub.id,
            status: createdSub.status,
            studentId: createdSub.studentId,
            productId: createdSub.productId,
            productCode: product.productCode,
            trialStartAt: createdSub.trialStartAt,
            trialEndAt: createdSub.trialEndAt,
            startAt: createdSub.startAt,
            endAt: createdSub.endAt ?? null,
        };
        return result;
    }
    /**
     * Đăng ký học thử (TRIAL).
     * Flow:
     *  - Tìm product theo productCode
     *  - Xác định số ngày trial: trialDaysOverride || product.trialDays
     *  - trial_start_at = now
     *  - trial_end_at = now + trialDays
     *  - status = 'TRIAL'
     *  - start_at, end_at = null (chỉ set khi convert sang gói chính thức)
     */
    async subscribeTrialCourse(input) {
        const { studentId, productCode } = input;
        console.info(`[SubscribeProductUC][subscribeTrialCourse] 👉 studentId=${studentId}, productCode=${productCode}`);
        if (!studentId || !productCode) {
            throw new Error('studentId và productCode là bắt buộc');
        }
        // 1. Lấy thông tin product
        const product = await this.productRepo.findByProductCode(productCode);
        if (!product || !product.productId) {
            throw new Error(`Không tìm thấy product với code=${productCode}`);
        }
        // 2. Xác định số ngày trial
        const trialDays = input.trialDaysOverride ??
            product.trialDays ??
            0;
        if (!trialDays || trialDays <= 0) {
            throw new Error(`Product code=${productCode} không cấu hình số ngày trial hợp lệ`);
        }
        const now = new Date();
        const trialStartAt = now;
        const trialEndAt = new Date(trialStartAt.getTime());
        trialEndAt.setDate(trialEndAt.getDate() + trialDays);
        const status = 'TRIAL';
        const autoRenew = input.autoRenew ?? false;
        // 3. Tạo subscription TRIAL
        const createdSub = await this.subscriptionRepo.createSubscription({
            studentId,
            productId: product.productId,
            status,
            trialStartAt,
            trialEndAt,
            startAt: undefined,
            endAt: undefined,
            autoRenew,
            blockedReason: null,
        });
        // 4. Map sang DTO output
        const result = {
            subscriptionId: createdSub.id,
            status: createdSub.status,
            studentId: createdSub.studentId,
            productId: createdSub.productId,
            productCode: product.productCode,
            trialStartAt: createdSub.trialStartAt,
            trialEndAt: createdSub.trialEndAt,
            startAt: createdSub.startAt,
            endAt: createdSub.endAt ?? null,
        };
        return result;
    }
}
exports.SubscribeProductUC = SubscribeProductUC;
