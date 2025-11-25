"use strict";
// BM/pg-bm-notification.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgNotificationOutboxRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgNotificationOutboxRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async enqueue(notification) {
        // TODO: INSERT INTO bm_notifications_outbox and return the inserted row
        throw new Error('Method not implemented.');
    }
    async markSent(_id, _sentAt) {
        // TODO: UPDATE bm_notifications_outbox SET status='SENT', sent_at=...
        throw new Error('Method not implemented.');
    }
    async markFailed(_id, _errorMessage) {
        // TODO: UPDATE bm_notifications_outbox SET status='FAILED', error_message=...
        throw new Error('Method not implemented.');
    }
}
exports.PgNotificationOutboxRepository = PgNotificationOutboxRepository;
