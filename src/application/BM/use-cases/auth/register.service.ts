import { AuthRepository } from '../../../../domain/BM/repos/auth.irepo';
import { PublicUser } from '../../dtos/public-user.dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sanitizeUser } from '../../../../domain/BM/common-services/utils';

type RegisterInput = {
  fullName: string;
  email?: string;
  phone?: string;
  password: string;
  profile?: {
    avatarImage?: string;
    dob?: string;
    gender?: string;
    grade?: number;
    slogen?: string;
  };
  role: string;
  device?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
};

// Lỗi: thiếu email/phone
export class EmailOrPhoneRequiredError extends Error {
  constructor(message = 'Email hoặc số điện thoại là bắt buộc') {
    super(message);
    this.name = 'EmailOrPhoneRequiredError';
    Object.setPrototypeOf(this, EmailOrPhoneRequiredError.prototype);
  }
}

// Lỗi: tài khoản đã tồn tại
export class AccountAlreadyExistsError extends Error {
  constructor(message = 'Tài khoản đã tồn tại') {
    super(message);
    this.name = 'AccountAlreadyExistsError';
    Object.setPrototypeOf(this, AccountAlreadyExistsError.prototype);
  }
}

export class RegisterService {
  constructor(private repo: AuthRepository) {}

  async execute(
    input: RegisterInput
  ): Promise<{ user: PublicUser; access_token: string }> {
    const {
      fullName,
      email,
      phone,
      password,
      profile,
      role,
      device,
      ipAddress,
      userAgent,
    } = input;

    // 1. Validate email / phone
    if (!email && !phone) {
      console.warn('[RegisterService] Thiếu email hoặc phone');
      throw new EmailOrPhoneRequiredError();
    }

    // 2. Check trùng tài khoản (email hoặc phone)
    const identifier = email || phone!;
    const existing = await this.repo.findUserByEmailOrPhone(identifier);
    if (existing) {
      console.warn(
        `[RegisterService] Tài khoản đã tồn tại: ${email || phone}`
      );
      throw new AccountAlreadyExistsError();
    }

    // 3. Hash mật khẩu
    const passwordHash = await bcrypt.hash(password, 10);

    // 4. Tạo user
    const user = await this.repo.createUser({
      fullName,
      email,
      phone,
      passwordHash,
      profile,
      role,
      status: 'active',
    });

    // 5. Tạo token + session (auto login sau khi đăng ký)
    const token = this.generateToken(user.id);
    const expiry = this.getExpiryDate();

    const resolvedDevice = device || 'web';

    await this.repo.createSession(
      user.id,
      token,
      resolvedDevice,
      expiry,
      ipAddress ?? null,
      userAgent ?? null
    );

    // 6. Trả về public user + token
    return {
      user: sanitizeUser(user),
      access_token: token,
    };
  }

  private generateToken(userId: number): string {
    if (!process.env.JWT_SECRET) {
      // Sẽ được controller map ra lỗi 500 "Có lỗi trong quá trình xử lý..."
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
