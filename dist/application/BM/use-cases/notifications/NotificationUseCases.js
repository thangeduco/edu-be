"use strict";
// src/application/BM/use-cases/notifications/NotificationUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMobilePushNotificationUseCase = exports.SendSmsNotificationUseCase = exports.SendEmailNotificationUseCase = void 0;
// TODO: import notification gateway repo/service khi có
// import { INotificationOutboxRepository } from '../../../domain/BM/repos/INotificationOutboxRepository';
class SendEmailNotificationUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: insert vào bm_notifications_outbox với channel EMAIL
        return {
            success: true,
            notificationId: 1,
            message: 'SendEmailNotificationUseCase not implemented yet',
        };
    }
}
exports.SendEmailNotificationUseCase = SendEmailNotificationUseCase;
class SendSmsNotificationUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: insert vào bm_notifications_outbox với channel SMS
        return {
            success: true,
            notificationId: 2,
            message: 'SendSmsNotificationUseCase not implemented yet',
        };
    }
}
exports.SendSmsNotificationUseCase = SendSmsNotificationUseCase;
class SendMobilePushNotificationUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: insert vào bm_notifications_outbox với channel PUSH
        return {
            success: true,
            notificationId: 3,
            message: 'SendMobilePushNotificationUseCase not implemented yet',
        };
    }
}
exports.SendMobilePushNotificationUseCase = SendMobilePushNotificationUseCase;
