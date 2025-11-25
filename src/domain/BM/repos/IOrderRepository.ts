// BM/repos/IOrderRepository.ts

import { BmOrder, BmPaymentTransaction, BmOtp } from '../models/OrderPaymentModels';

export interface IOrderRepository {
  createOrder(order: Omit<BmOrder, 'id' | 'createdAt' | 'updatedAt'>): Promise<BmOrder>;
  findById(id: number): Promise<BmOrder | null>;
  findByOrderNumber(orderNumber: string): Promise<BmOrder | null>;
  updateOrder(order: BmOrder): Promise<void>;
}

export interface IPaymentTransactionRepository {
  createTransaction(
    txn: Omit<BmPaymentTransaction, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<BmPaymentTransaction>;
  updateTransaction(txn: BmPaymentTransaction): Promise<void>;
  listByOrderId(orderId: number): Promise<BmPaymentTransaction[]>;
}

export interface IOtpRepository {
  createOtp(otp: Omit<BmOtp, 'id' | 'createdAt' | 'verifiedAt'>): Promise<BmOtp>;
  verifyOtp(destination: string, code: string, purpose: string): Promise<BmOtp | null>;
}

export interface IAuthTokenService {
  generateTokens(userId: number, role: string): Promise<{ accessToken: string; refreshToken: string }>;
  verifyRefreshToken(token: string): Promise<{ userId: number; role: string } | null>;
}
