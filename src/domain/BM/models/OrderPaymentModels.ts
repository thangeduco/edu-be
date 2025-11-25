// BM/models/OrderPaymentModels.ts

export interface BmOrder {
  id: number;
  orderNumber: string;
  parentId: number;
  studentId?: number;
  productId: number;
  amount: number;
  currency: string;
  status: string; // PENDING, PAID, CANCELED...
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
  paidAt?: Date;
}

export interface BmPaymentTransaction {
  id: number;
  orderId: number;
  provider: string;
  providerTxnId?: string;
  status: string; // PENDING, SUCCESS, FAILED...
  amount: number;
  currency: string;
  rawRequest?: string;
  rawResponse?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmOtp {
  id: number;
  userId?: number;
  destination: string; // email or phone
  code: string;
  purpose: string; // REGISTER, RESET_PASSWORD...
  status: string; // NEW, VERIFIED, EXPIRED...
  expiresAt: Date;
  createdAt: Date;
  verifiedAt?: Date;
}
