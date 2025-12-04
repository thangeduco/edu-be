"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = exports.InvalidCredentialsError = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../../../domain/BM/common-services/utils");
// Lỗi dùng riêng cho trường hợp user hoặc mật khẩu không đúng
class InvalidCredentialsError extends Error {
    constructor(message = 'INVALID_CREDENTIALS') {
        super(message);
        this.name = 'InvalidCredentialsError';
        // Rất quan trọng để instanceof hoạt động đúng với class kế thừa Error
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
class LoginService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { emailOrPhone, password, device, ipAddress, userAgent } = input;
        // 1. Tìm user theo email hoặc phone
        const user = await this.repo.findUserByEmailOrPhone(emailOrPhone);
        if (!user) {
            console.warn(`[LoginService] Không tìm thấy người dùng với identifier: ${emailOrPhone}`);
            // Gộp vào 1 loại lỗi: INVALID_CREDENTIALS
            throw new InvalidCredentialsError();
        }
        // 2. Check password
        const match = await bcrypt_1.default.compare(password, user.passwordHash);
        if (!match) {
            console.warn(`[LoginService] Mật khẩu sai cho userId: ${user.id}`);
            // Gộp vào 1 loại lỗi: INVALID_CREDENTIALS
            throw new InvalidCredentialsError();
        }
        // 3. Tạo JWT token
        const token = this.generateToken(user.id);
        const expiry = this.getExpiryDate();
        // 4. Ghi session (bm_user_sessions + bm_user_session_logs via repo)
        const resolvedDevice = device || 'web';
        await this.repo.createSession(user.id, token, resolvedDevice, expiry, ipAddress ?? null, userAgent ?? null);
        // 5. Trả về user public + token
        return {
            user: (0, utils_1.sanitizeUser)(user),
            access_token: token,
        };
    }
    generateToken(userId) {
        if (!process.env.JWT_SECRET) {
            // Lỗi này sẽ được controller bắt và trả về "Có lỗi trong quá trình xử lý."
            throw new Error('JWT_SECRET is not configured');
        }
        return jsonwebtoken_1.default.sign({ sub: userId, scope: 'user' }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
    }
    getExpiryDate() {
        // 7 ngày
        return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    }
}
exports.LoginService = LoginService;
