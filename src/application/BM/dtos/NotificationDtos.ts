// src/application/BM/dtos/NotificationDtos.ts

export interface SendEmailNotificationInput {
  userId: number;
  subject: string;
  template?: string;
  body?: string;
  payload?: Record<string, any>;
}

export interface SendEmailNotificationOutput {
  success: boolean;
  notificationId?: number;
  message?: string;
}

export interface SendSmsNotificationInput {
  userId: number;
  text: string;
  payload?: Record<string, any>;
}

export interface SendSmsNotificationOutput {
  success: boolean;
  notificationId?: number;
  message?: string;
}

export interface SendMobilePushNotificationInput {
  userId: number;
  title: string;
  body: string;
  payload?: Record<string, any>;
}

export interface SendMobilePushNotificationOutput {
  success: boolean;
  notificationId?: number;
  message?: string;
}
