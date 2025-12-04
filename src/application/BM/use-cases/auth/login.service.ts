import { AuthRepository } from '../../../../domain/BM/repos/auth.irepo';
import { PublicUser } from '../../dtos/public-user.dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sanitizeUser } from '../../../../domain/BM/common-services/utils';

type LoginInput = {
  emailOrPhone: string;
  password: string;
  device?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
};

// Lỗi dùng riêng cho trường hợp user hoặc mật khẩu không đúng
export class InvalidCredentialsError extends Error {
  constructor(message = 'INVALID_CREDENTIALS') {
    super(message);
    this.name = 'InvalidCredentialsError';

    // Rất quan trọng để instanceof hoạt động đúng với class kế thừa Error
    Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
  }
}

export class LoginService {
  constructor(private repo: AuthRepository) {}

  async execute(
    input: LoginInput
  ): Promise<{ user: PublicUser; access_token: string }> {
    const { emailOrPhone, password, device, ipAddress, userAgent } = input;

    // 1. Tìm user theo email hoặc phone
    const user = await this.repo.findUserByEmailOrPhone(emailOrPhone);
    if (!user) {
      console.warn(
        `[LoginService] Không tìm thấy người dùng với identifier: ${emailOrPhone}`
      );
      // Gộp vào 1 loại lỗi: INVALID_CREDENTIALS
      throw new InvalidCredentialsError();
    }

    // 2. Check password
    const match = await bcrypt.compare(password, user.passwordHash);
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
    await this.repo.createSession(
      user.id,
      token,
      resolvedDevice,
      expiry,
      ipAddress ?? null,
      userAgent ?? null
    );

    // 5. Trả về user public + token
    return {
      user: sanitizeUser(user),
      access_token: token,
    };
  }

  private generateToken(userId: number): string {
    if (!process.env.JWT_SECRET) {
      // Lỗi này sẽ được controller bắt và trả về "Có lỗi trong quá trình xử lý."
      throw new Error('JWT_SECRET is not configured');
    }

    return jwt.sign({ sub: userId, scope: 'user' }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
  }

  private getExpiryDate(): string {
    // 7 ngày
    return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  }
}
