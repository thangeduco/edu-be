"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmAuthController = void 0;
const login_service_1 = require("../../../application/BM/use-cases/auth/login.service");
const register_service_1 = require("../../../application/BM/use-cases/auth/register.service");
const logout_service_1 = require("../../../application/BM/use-cases/auth/logout.service");
const auth_info_service_1 = require("../../../application/BM/use-cases/auth/auth-info.service");
const pg_bm_auth_repository_1 = require("../../../infrastructure/BM/pg-bm-auth.repository");
// ⚙️ Khởi tạo repository và service
const authRepo = new pg_bm_auth_repository_1.PgAuthRepository();
const loginService = new login_service_1.LoginService(authRepo);
const registerService = new register_service_1.RegisterService(authRepo);
const logoutService = new logout_service_1.LogoutService(authRepo);
const authInfoService = new auth_info_service_1.AuthInfoService(authRepo);
// Helper: Lấy thông tin client (ip, device, user-agent)
function getClientContext(req) {
    const ipFromHeader = req.headers['x-forwarded-for']
        ?.split(',')[0]
        ?.trim();
    const ipAddress = ipFromHeader || req.ip || (req.socket && req.socket.remoteAddress) || null;
    const userAgent = req.headers['user-agent'] || null;
    // Có thể nâng cấp logic detect device sau
    const deviceHeader = req.headers['x-device'] || null;
    const device = deviceHeader || 'web';
    return { ipAddress, userAgent, device };
}
exports.bmAuthController = {
    // 🔐 Đăng nhập
    async login(req, res) {
        try {
            const { emailOrPhone, password } = req.body;
            // Thiếu dữ liệu đầu vào → xem như lỗi xử lý nhập sai
            if (!emailOrPhone || !password) {
                return res.status(400).json({
                    message: 'Tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại.',
                });
            }
            const { ipAddress, userAgent, device } = getClientContext(req);
            const result = await loginService.execute({
                emailOrPhone,
                password,
                ipAddress,
                userAgent,
                device,
            });
            return res.status(200).json(result);
        }
        catch (error) {
            console.error('[bmAuthController][login] ❌ Lỗi:', error);
            console.log('[bmAuthController][login] error.constructor.name =', error?.constructor?.name);
            // Lỗi 1: User hoặc mật khẩu không đúng
            if (error instanceof login_service_1.InvalidCredentialsError ||
                error?.name === 'InvalidCredentialsError') {
                console.error('[bmAuthController][login] ❌ Lỗi: loại InvalidCredentialsError');
                return res.status(401).json({
                    message: 'Tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại.',
                });
            }
            // Lỗi 2: Các lỗi khác trong quá trình edu-be xử lý
            console.error('[bmAuthController][login] ❌ Lỗi: Lỗi trong quá trình xử lý khác');
            return res.status(500).json({
                message: 'Có lỗi trong quá trình xử lý. Vui lòng thử lại sau.',
            });
        }
    },
    // 📝 Đăng ký
    async register(req, res) {
        try {
            const result = await registerService.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            console.error('[bmAuthController][register] ❌ Lỗi:', error);
            return res.status(400).json({
                message: error.message || 'Đăng ký không thành công',
            });
        }
    },
    // 🚪 Đăng xuất
    async logout(req, res) {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader?.split(' ')[1]; // Bearer <token>
            if (!token) {
                return res.status(400).json({
                    message: 'Không tìm thấy token trong header Authorization',
                });
            }
            const { ipAddress, userAgent, device } = getClientContext(req);
            await logoutService.execute({
                token,
                ipAddress,
                userAgent,
                device,
            });
            return res.status(200).json({ message: 'Đăng xuất thành công' });
        }
        catch (error) {
            console.error('[bmAuthController][logout] ❌ Lỗi:', error);
            return res.status(500).json({
                message: error.message || 'Đăng xuất không thành công',
            });
        }
    },
    // 👤 Lấy thông tin user theo ID
    async getUserInfo(req, res) {
        try {
            const userId = Number(req.params.userId);
            if (isNaN(userId)) {
                return res.status(400).json({ message: 'userId không hợp lệ' });
            }
            const user = await authInfoService.execute(userId);
            return res.status(200).json(user);
        }
        catch (err) {
            console.error('[bmAuthController][getUserInfo] ❌ Lỗi:', err);
            return res
                .status(404)
                .json({ message: err.message || 'Không tìm thấy người dùng' });
        }
    },
    // ✅ Kiểm tra có phải lần đăng nhập đầu trong ngày không
    async isFirstLoginToday(req, res) {
        try {
            const userId = Number(req.params.userId);
            if (isNaN(userId)) {
                return res.status(400).json({ message: 'userId không hợp lệ' });
            }
            // TODO: implement thật trong AuthInfoService
            const isFirstLogin = true;
            return res.status(200).json({ isFirstLogin });
        }
        catch (err) {
            console.error('[bmAuthController][isFirstLoginToday] ❌ Lỗi:', err);
            return res.status(500).json({
                message: err.message || 'Lỗi kiểm tra đăng nhập lần đầu',
            });
        }
    },
};
