import { Request, Response } from 'express';
import {
  LoginService,
  InvalidCredentialsError,
} from '../../../application/BM/use-cases/auth/login.service';
import { RegisterService } from '../../../application/BM/use-cases/auth/register.service';
import { LogoutService } from '../../../application/BM/use-cases/auth/logout.service';
import { AuthInfoService } from '../../../application/BM/use-cases/auth/auth-info.service';

import { PgAuthRepository } from '../../../infrastructure/BM/pg-bm-auth.repository';

// ⚙️ Khởi tạo repository và service
const authRepo = new PgAuthRepository();
const loginService = new LoginService(authRepo);
const registerService = new RegisterService(authRepo);
const logoutService = new LogoutService(authRepo);
const authInfoService = new AuthInfoService(authRepo);

// Helper: Lấy thông tin client (ip, device, user-agent)
function getClientContext(req: Request) {
  const ipFromHeader = (req.headers['x-forwarded-for'] as string | undefined)
    ?.split(',')[0]
    ?.trim();
  const ipAddress =
    ipFromHeader || req.ip || (req.socket && req.socket.remoteAddress) || null;

  const userAgent = (req.headers['user-agent'] as string | undefined) || null;

  // Có thể nâng cấp logic detect device sau
  const deviceHeader = (req.headers['x-device'] as string | undefined) || null;
  const device = deviceHeader || 'web';

  return { ipAddress, userAgent, device };
}

export const bmAuthController = {
  // 🔐 Đăng nhập
  async login(req: Request, res: Response) {
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
    } catch (error: any) {
      console.error('[bmAuthController][login] ❌ Lỗi:', error);
      console.log(
        '[bmAuthController][login] error.constructor.name =',
        error?.constructor?.name
      );

      // Lỗi 1: User hoặc mật khẩu không đúng
      if (
        error instanceof InvalidCredentialsError ||
        error?.name === 'InvalidCredentialsError'
      ) {
        console.error(
          '[bmAuthController][login] ❌ Lỗi: loại InvalidCredentialsError'
        );
        return res.status(401).json({
          message: 'Tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại.',
        });
      }

      // Lỗi 2: Các lỗi khác trong quá trình edu-be xử lý
      console.error(
        '[bmAuthController][login] ❌ Lỗi: Lỗi trong quá trình xử lý khác'
      );
      return res.status(500).json({
        message: 'Có lỗi trong quá trình xử lý. Vui lòng thử lại sau.',
      });
    }
  },

  // 📝 Đăng ký
  async register(req: Request, res: Response) {
    try {
      const result = await registerService.execute(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      console.error('[bmAuthController][register] ❌ Lỗi:', error);
      return res.status(400).json({
        message: error.message || 'Đăng ký không thành công',
      });
    }
  },

  // 🚪 Đăng xuất
  async logout(req: Request, res: Response) {
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
    } catch (error: any) {
      console.error('[bmAuthController][logout] ❌ Lỗi:', error);
      return res.status(500).json({
        message: error.message || 'Đăng xuất không thành công',
      });
    }
  },

  // 👤 Lấy thông tin user theo ID
  async getUserInfo(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'userId không hợp lệ' });
      }

      const user = await authInfoService.execute(userId);
      return res.status(200).json(user);
    } catch (err: any) {
      console.error('[bmAuthController][getUserInfo] ❌ Lỗi:', err);
      return res
        .status(404)
        .json({ message: err.message || 'Không tìm thấy người dùng' });
    }
  },

  // ✅ Kiểm tra có phải lần đăng nhập đầu trong ngày không
  async isFirstLoginToday(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'userId không hợp lệ' });
      }

      // TODO: implement thật trong AuthInfoService
      const isFirstLogin = true;

      return res.status(200).json({ isFirstLogin });
    } catch (err: any) {
      console.error('[bmAuthController][isFirstLoginToday] ❌ Lỗi:', err);
      return res.status(500).json({
        message: err.message || 'Lỗi kiểm tra đăng nhập lần đầu',
      });
    }
  },
};
