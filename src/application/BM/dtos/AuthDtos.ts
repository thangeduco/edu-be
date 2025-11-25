// src/application/BM/dtos/AuthDtos.ts

export interface RegisterParentInput {
  email?: string;
  phone?: string;
  password: string;
  fullName: string;
}

export interface RegisterParentOutput {
  success: boolean;
  parentId?: number;
  requiresOtp?: boolean;
  message?: string;
}

export interface VerifyOtpInput {
  userId?: number;
  destination: string;
  code: string;
  purpose: string; // REGISTER, RESET_PASSWORD...
}

export interface VerifyOtpOutput {
  success: boolean;
  message?: string;
}

export interface LoginInput {
  emailOrPhone: string;
  password: string;
  role?: string; // PARENT, STUDENT...
}

export interface LoginOutput {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  userId?: number;
  role?: string;
  message?: string;
}

export interface LogoutInput {
  userId: number;
}

export interface LogoutOutput {
  success: boolean;
}

export interface RefreshTokenInput {
  refreshToken: string;
}

export interface RefreshTokenOutput {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  message?: string;
}

export interface ForgotPasswordInput {
  emailOrPhone: string;
}

export interface ForgotPasswordOutput {
  success: boolean;
  message?: string;
}

export interface ResetPasswordInput {
  tokenOrOtp: string;
  newPassword: string;
}

export interface ResetPasswordOutput {
  success: boolean;
  message?: string;
}
