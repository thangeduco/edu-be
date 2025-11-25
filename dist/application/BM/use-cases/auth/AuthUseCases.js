"use strict";
// src/application/BM/use-cases/auth/AuthUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordUseCase = exports.ForgotPasswordUseCase = exports.RefreshTokenUseCase = exports.LogoutUseCase = exports.LoginUseCase = exports.VerifyOtpUseCase = exports.RegisterParentUseCase = void 0;
// TODO: tạo các interface repo & service ở src/domain/BM/repos
// import { IUserRepository } from '../../../domain/BM/repos/IUserRepository';
// import { IOtpRepository } from '../../../domain/BM/repos/IOtpRepository';
// import { IAuthTokenService } from '../../../domain/BM/repos/IAuthTokenService';
class RegisterParentUseCase {
    // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
    constructor() { }
    async execute(input) {
        // TODO: implement logic tạo user PARENT, lưu OTP nếu cần
        return {
            success: true,
            parentId: 1,
            requiresOtp: true,
            message: 'RegisterParentUseCase not implemented yet',
        };
    }
}
exports.RegisterParentUseCase = RegisterParentUseCase;
class VerifyOtpUseCase {
    // constructor(private otpRepo: IOtpRepository) {}
    constructor() { }
    async execute(input) {
        // TODO: kiểm tra OTP, active tài khoản
        return {
            success: true,
            message: 'VerifyOtpUseCase not implemented yet',
        };
    }
}
exports.VerifyOtpUseCase = VerifyOtpUseCase;
class LoginUseCase {
    // constructor(private userRepo: IUserRepository, private tokenService: IAuthTokenService) {}
    constructor() { }
    async execute(input) {
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
exports.LoginUseCase = LoginUseCase;
class LogoutUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: invalidate refresh token / session nếu cần
        return {
            success: true,
        };
    }
}
exports.LogoutUseCase = LogoutUseCase;
class RefreshTokenUseCase {
    // constructor(private tokenService: IAuthTokenService) {}
    constructor() { }
    async execute(_input) {
        // TODO: verify refresh token và sinh token mới
        return {
            success: true,
            accessToken: 'new-access-token',
            refreshToken: 'new-refresh-token',
            message: 'RefreshTokenUseCase not implemented yet',
        };
    }
}
exports.RefreshTokenUseCase = RefreshTokenUseCase;
class ForgotPasswordUseCase {
    // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
    constructor() { }
    async execute(_input) {
        // TODO: tạo OTP/ token reset password và gửi qua BM notification
        return {
            success: true,
            message: 'ForgotPasswordUseCase not implemented yet',
        };
    }
}
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
class ResetPasswordUseCase {
    // constructor(private userRepo: IUserRepository, private otpRepo: IOtpRepository) {}
    constructor() { }
    async execute(_input) {
        // TODO: verify token/OTP, cập nhật mật khẩu
        return {
            success: true,
            message: 'ResetPasswordUseCase not implemented yet',
        };
    }
}
exports.ResetPasswordUseCase = ResetPasswordUseCase;
