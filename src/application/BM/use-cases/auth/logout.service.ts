import { AuthRepository } from '../../../../domain/BM/repos/auth.irepo';

type LogoutInput = {
  token: string;
  device?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
};

// (Tuỳ chọn) Lỗi riêng cho trường hợp token không hợp lệ / thiếu
export class LogoutTokenError extends Error {
  constructor(message = 'Token không hợp lệ') {
    super(message);
    this.name = 'LogoutTokenError';
    Object.setPrototypeOf(this, LogoutTokenError.prototype);
  }
}

export class LogoutService {
  constructor(private repo: AuthRepository) {}

  async execute(input: LogoutInput): Promise<void> {
    const { token, device, ipAddress, userAgent } = input;

    if (!token) {
      console.warn('[LogoutService] Token không hợp lệ hoặc bị thiếu');
      throw new LogoutTokenError('Token là bắt buộc');
    }

    // endSessionByToken sẽ:
    //  - UPDATE bm_user_sessions: status = ENDED, ended_at = NOW()
    //  - INSERT log vào bm_user_session_logs (SESSION_END)
    await this.repo.endSessionByToken(
      token,
      device ?? null,
      ipAddress ?? null,
      userAgent ?? null
    );
  }
}
