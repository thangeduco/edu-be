// src/application/BM/use-cases/notifications/NotificationUseCases.ts

import {
  SendEmailNotificationInput,
  SendEmailNotificationOutput,
  SendSmsNotificationInput,
  SendSmsNotificationOutput,
  SendMobilePushNotificationInput,
  SendMobilePushNotificationOutput,
} from '../../dtos/NotificationDtos';

// TODO: import notification gateway repo/service khi có
// import { INotificationOutboxRepository } from '../../../domain/BM/repos/INotificationOutboxRepository';

export class SendEmailNotificationUseCase {
  constructor() {}

  async execute(_input: SendEmailNotificationInput): Promise<SendEmailNotificationOutput> {
    // TODO: insert vào bm_notifications_outbox với channel EMAIL
    return {
      success: true,
      notificationId: 1,
      message: 'SendEmailNotificationUseCase not implemented yet',
    };
  }
}

export class SendSmsNotificationUseCase {
  constructor() {}

  async execute(_input: SendSmsNotificationInput): Promise<SendSmsNotificationOutput> {
    // TODO: insert vào bm_notifications_outbox với channel SMS
    return {
      success: true,
      notificationId: 2,
      message: 'SendSmsNotificationUseCase not implemented yet',
    };
  }
}

export class SendMobilePushNotificationUseCase {
  constructor() {}

  async execute(
    _input: SendMobilePushNotificationInput,
  ): Promise<SendMobilePushNotificationOutput> {
    // TODO: insert vào bm_notifications_outbox với channel PUSH
    return {
      success: true,
      notificationId: 3,
      message: 'SendMobilePushNotificationUseCase not implemented yet',
    };
  }
}
