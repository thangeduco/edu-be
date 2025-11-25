// BM/pg-bm-notification.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import { INotificationOutboxRepository } from '../../domain/BM/repos';
import { BmNotificationOutbox } from '../../domain/BM/models/NotificationModels'; // Adjust the import path as needed

export class PgNotificationOutboxRepository implements INotificationOutboxRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async enqueue(notification: Omit<BmNotificationOutbox, "id" | "createdAt" | "sentAt">): Promise<BmNotificationOutbox> {
    // TODO: INSERT INTO bm_notifications_outbox and return the inserted row
    throw new Error('Method not implemented.');
  }

  async markSent(_id: number, _sentAt: Date): Promise<void> {
    // TODO: UPDATE bm_notifications_outbox SET status='SENT', sent_at=...
    throw new Error('Method not implemented.');
  }

  async markFailed(_id: number, _errorMessage: string): Promise<void> {
    // TODO: UPDATE bm_notifications_outbox SET status='FAILED', error_message=...
    throw new Error('Method not implemented.');
  }
}
