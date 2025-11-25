// BM/models/ProductModels.ts

export interface BmProduct {
  id: number;
  code: string;
  name: string;
  type: string; // COURSE_SUBSCRIPTION...
  description?: string;
  price: number;
  currency: string;
  billingCycle?: string; // MONTHLY, ONE_TIME...
  isActive: boolean;
  trialDays?: number;
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmSubscription {
  id: number;
  studentId: number;
  productId: number;
  status: string; // ACTIVE, EXPIRED, CANCELED...
  trialStartAt?: Date;
  trialEndAt?: Date;
  startAt?: Date;
  endAt?: Date;
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}
