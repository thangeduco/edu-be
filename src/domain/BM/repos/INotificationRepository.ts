// BM/repos/INotificationRepository.ts

import { BmNotificationOutbox } from '../models/NotificationModels';

export interface INotificationOutboxRepository {
  enqueue(notification: Omit<BmNotificationOutbox, 'id' | 'createdAt' | 'sentAt'>): Promise<BmNotificationOutbox>;
  markSent(id: number, sentAt: Date): Promise<void>;
  markFailed(id: number, errorMessage: string): Promise<void>;
}
