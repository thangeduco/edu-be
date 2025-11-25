// src/application/BM/use-cases/auth/AuthUseCases.ts

import {
  RegisterParentInput,
  RegisterParentOutput,
  VerifyOtpInput,
  VerifyOtpOutput,
  LoginInput,
  LoginOutput,
  LogoutInput,
  LogoutOutput,
  RefreshTokenInput,
  RefreshTokenOutput,
  ForgotPasswordInput,
  ForgotPasswordOutput,
  ResetPasswordInput,
  ResetPasswordOutput,
} from '../../dtos/AuthDtos';

// TODO: tạo các interface repo & service ở src/domain/BM/repos
// import { IUserRepository } from '../../../domain/BM/repos/IUserRepository';
// import { IOtpRepository } from '../../../domain/BM/repos/IOtpRepository';
// import { IAuthTokenService } from '../../../domain/BM/repos/IAuthTokenService';

export class RegisterParentUseCase {
  // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
  constructor() {}

  async execute(input: RegisterParentInput): Promise<RegisterParentOutput> {
    // TODO: implement logic tạo user PARENT, lưu OTP nếu cần
    return {
      success: true,
      parentId: 1,
      requiresOtp: true,
      message: 'RegisterParentUseCase not implemented yet',
    };
  }
}

export class VerifyOtpUseCase {
  // constructor(private otpRepo: IOtpRepository) {}
  constructor() {}

  async execute(input: VerifyOtpInput): Promise<VerifyOtpOutput> {
    // TODO: kiểm tra OTP, active tài khoản
    return {
      success: true,
      message: 'VerifyOtpUseCase not implemented yet',
    };
  }
}

export class LoginUseCase {
  // constructor(private userRepo: IUserRepository, private tokenService: IAuthTokenService) {}
  constructor() {}

  async execute(input: LoginInput): Promise<LoginOutput> {
    // TODO: validate user + password, sinh access/refresh token
    return {
      success: true,
      accessToken: 'dummy-access-token',
      refreshToken: 'dummy-refresh-token',
      userId: 1,
      role: input.role ?? 'PARENT',
      message: 'LoginUseCase not implemented yet',
    };
  }
}

export class LogoutUseCase {
  constructor() {}

  async execute(_input: LogoutInput): Promise<LogoutOutput> {
    // TODO: invalidate refresh token / session nếu cần
    return {
      success: true,
    };
  }
}

export class RefreshTokenUseCase {
  // constructor(private tokenService: IAuthTokenService) {}
  constructor() {}

  async execute(_input: RefreshTokenInput): Promise<RefreshTokenOutput> {
    // TODO: verify refresh token và sinh token mới
    return {
      success: true,
      accessToken: 'new-access-token',
      refreshToken: 'new-refresh-token',
      message: 'RefreshTokenUseCase not implemented yet',
    };
  }
}

export class ForgotPasswordUseCase {
  // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
  constructor() {}

  async execute(_input: ForgotPasswordInput): Promise<ForgotPasswordOutput> {
    // TODO: tạo OTP/ token reset password và gửi qua BM notification
    return {
      success: true,
      message: 'ForgotPasswordUseCase not implemented yet',
    };
  }
}

export class ResetPasswordUseCase {
  // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
  constructor() {}

  async execute(_input: ResetPasswordInput): Promise<ResetPasswordOutput> {
    // TODO: verify token/OTP, cập nhật mật khẩu
    return {
      success: true,
      message: 'ResetPasswordUseCase not implemented yet',
    };
  }
}
