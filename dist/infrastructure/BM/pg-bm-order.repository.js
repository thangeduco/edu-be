"use strict";
// BM/pg-bm-order.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthTokenService = exports.PgOtpRepository = exports.PgPaymentTransactionRepository = exports.PgOrderRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgOrderRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createOrder(order) {
        // TODO: INSERT INTO bm_orders and return the created BmOrder
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM bm_orders WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async findByOrderNumber(_orderNumber) {
        // TODO: SELECT ... FROM bm_orders WHERE order_number = $1
        throw new Error('Method not implemented.');
    }
    async updateOrder(_order) {
        // TODO: UPDATE bm_orders ...
        throw new Error('Method not implemented.');
    }
}
exports.PgOrderRepository = PgOrderRepository;
class PgPaymentTransactionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createTransaction(txn) {
        // TODO: INSERT INTO bm_payment_transactions and return the created BmPaymentTransaction
        throw new Error('Method not implemented.');
    }
    async updateTransaction(_txn) {
        // TODO: UPDATE bm_payment_transactions ...
        throw new Error('Method not implemented.');
    }
    async listByOrderId(_orderId) {
        // TODO: SELECT ... FROM bm_payment_transactions WHERE order_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgPaymentTransactionRepository = PgPaymentTransactionRepository;
class PgOtpRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createOtp(otp) {
        // TODO: INSERT INTO bm_otps and return the created BmOtp
        throw new Error('Method not implemented.');
    }
    async verifyOtp(destination, code, purpose) {
        // TODO: SELECT/UPDATE ... FROM bm_otps WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgOtpRepository = PgOtpRepository;
// Simple JWT-based token service skeleton
class JwtAuthTokenService {
    // TODO: inject secret, expiry config if needed
    async generateTokens(_userId, _role) {
        // TODO: use jsonwebtoken or similar
        throw new Error('Method not implemented.');
    }
    async verifyRefreshToken(_token) {
        // TODO: verify token & return payload
        throw new Error('Method not implemented.');
    }
}
exports.JwtAuthTokenService = JwtAuthTokenService;
