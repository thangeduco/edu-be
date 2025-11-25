// BM/pg-bm-order.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IOrderRepository,
  IPaymentTransactionRepository,
  IOtpRepository,
  IAuthTokenService,
} from '../../domain/BM/repos';
import { BmOrder, BmPaymentTransaction, BmOtp } from '../../domain/BM/models/OrderPaymentModels'; // Adjust the path if needed

export class PgOrderRepository implements IOrderRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createOrder(order: Omit<BmOrder, "id" | "createdAt" | "updatedAt">): Promise<BmOrder> {
    // TODO: INSERT INTO bm_orders and return the created BmOrder
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<BmOrder> {
    // TODO: SELECT ... FROM bm_orders WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async findByOrderNumber(_orderNumber: string): Promise<BmOrder> {
    // TODO: SELECT ... FROM bm_orders WHERE order_number = $1
    throw new Error('Method not implemented.');
  }

  async updateOrder(_order: any): Promise<void> {
    // TODO: UPDATE bm_orders ...
    throw new Error('Method not implemented.');
  }
}

export class PgPaymentTransactionRepository implements IPaymentTransactionRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createTransaction(txn: Omit<BmPaymentTransaction, "id" | "createdAt" | "updatedAt">): Promise<BmPaymentTransaction> {
    // TODO: INSERT INTO bm_payment_transactions and return the created BmPaymentTransaction
    throw new Error('Method not implemented.');
  }

  async updateTransaction(_txn: any): Promise<void> {
    // TODO: UPDATE bm_payment_transactions ...
    throw new Error('Method not implemented.');
  }

  async listByOrderId(_orderId: number): Promise<BmPaymentTransaction[]> {
    // TODO: SELECT ... FROM bm_payment_transactions WHERE order_id = $1
    throw new Error('Method not implemented.');
  }
}

export class PgOtpRepository implements IOtpRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createOtp(otp: Omit<BmOtp, "id" | "createdAt" | "verifiedAt">): Promise<BmOtp> {
    // TODO: INSERT INTO bm_otps and return the created BmOtp
    throw new Error('Method not implemented.');
  }

  async verifyOtp(destination: string, code: string, purpose: string): Promise<BmOtp> {
    // TODO: SELECT/UPDATE ... FROM bm_otps WHERE ...
    throw new Error('Method not implemented.');
  }
}

// Simple JWT-based token service skeleton
export class JwtAuthTokenService implements IAuthTokenService {
  // TODO: inject secret, expiry config if needed
  async generateTokens(_userId: number, _role: string): Promise<{ accessToken: string; refreshToken: string; }> {
    // TODO: use jsonwebtoken or similar
    throw new Error('Method not implemented.');
  }

  async verifyRefreshToken(_token: string): Promise<{ userId: number; role: string; }> {
    // TODO: verify token & return payload
    throw new Error('Method not implemented.');
  }
}
