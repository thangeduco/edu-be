// BM/models/NotificationModels.ts

export interface BmNotificationOutbox {
  id: number;
  userId: number;
  channel: string; // EMAIL, SMS, PUSH
  subject?: string;
  content?: string;
  template?: string;
  payloadJson?: any;
  status: string; // PENDING, SENT, FAILED
  createdAt: Date;
  sentAt?: Date;
  errorMessage?: string;
}
