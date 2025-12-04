"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../../../domain/BM/common-services/utils");
class RegisterService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { fullName, email, phone, password, profile, role, device, ipAddress, userAgent, } = input;
        if (!email && !phone) {
            throw new Error('Email hoặc số điện thoại là bắt buộc');
        }
        // 1. Check trùng tài khoản (email hoặc phone)
        const identifier = email || phone;
        const existing = await this.repo.findUserByEmailOrPhone(identifier);
        if (existing) {
            console.warn(`[RegisterService] Tài khoản đã tồn tại: ${email || phone}`);
            throw new Error('Tài khoản đã tồn tại');
        }
        // 2. Hash mật khẩu
        const passwordHash = await bcrypt_1.default.hash(password, 10);
        // 3. Tạo user
        const user = await this.repo.createUser({
            fullName,
            email,
            phone,
            passwordHash,
            profile,
            role,
            status: 'active',
        });
        // 4. Tạo token + session (auto login sau khi đăng ký)
        const token = this.generateToken(user.id);
        const expiry = this.getExpiryDate();
        const resolvedDevice = device || 'web';
        await this.repo.createSession(user.id, token, resolvedDevice, expiry, ipAddress ?? null, userAgent ?? null);
        // 5. Trả về public user + token
        return {
            user: (0, utils_1.sanitizeUser)(user),
            access_token: token,
        };
    }
    generateToken(userId) {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not configured');
        }
        return jsonwebtoken_1.default.sign({ sub: userId, scope: 'user' }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
    }
    getExpiryDate() {
        return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    }
}
exports.RegisterService = RegisterService;
