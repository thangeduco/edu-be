"use strict";
// BM/pg-bm-product.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgSubscriptionRepository = exports.PgProductRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgProductRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listProducts(_filter) {
        // TODO: SELECT ... FROM bm_products WHERE ...
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM bm_products WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async findByCode(_code) {
        // TODO: SELECT ... FROM bm_products WHERE code = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgProductRepository = PgProductRepository;
class PgSubscriptionRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listSubscriptionsOfStudent(_studentId) {
        // TODO: SELECT ... FROM bm_subscriptions WHERE student_id = $1
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM bm_subscriptions WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async createSubscription(sub) {
        // TODO: INSERT INTO bm_subscriptions ...
        throw new Error('Method not implemented.');
    }
    async updateSubscription(_sub) {
        // TODO: UPDATE bm_subscriptions ...
        throw new Error('Method not implemented.');
    }
}
exports.PgSubscriptionRepository = PgSubscriptionRepository;
