import { BMUser } from '../models/user.model';

/**
 * AuthRepository
 * Interface cho các thao tác liên quan đến:
 * - User
 * - Session
 * - Session logs
 */
export interface AuthRepository {
  /**
   * Tìm user theo email hoặc số điện thoại
   */
  findUserByEmailOrPhone(identifier: string): Promise<BMUser | null>;

  /**
   * Lấy thông tin user theo userId
   */
  getUserById(userId: number): Promise<BMUser | null>;

  /**
   * Tạo user mới (bao gồm profile)
   */
  createUser(user: Partial<BMUser>): Promise<BMUser>;

  // ---------------------------------------------------------------------
  // SESSION MANAGEMENT
  // ---------------------------------------------------------------------

  /**
   * Tạo session mới khi login/register thành công
   * và ghi 1 log SESSION_START vào bm_user_session_logs
   *
   * @param userId ID người dùng
   * @param token Access token (JWT)
   * @param device Thiết bị: web/mobile/app
   * @param expiredAt ISO timestamp khi token hết hạn
   * @param ipAddress IP đăng nhập
   * @param userAgent user-agent từ trình duyệt/device
   */
  createSession(
    userId: number,
    token: string,
    device: string,
    expiredAt: string,
    ipAddress?: string | null,
    userAgent?: string | null
  ): Promise<void>;

  /**
   * Kết thúc session:
   * - UPDATE bm_user_sessions: status = 'ENDED', ended_at = NOW()
   * - Ghi 1 log SESSION_END vào bm_user_session_logs
   *
   * @param token Access token cần kết thúc
   * @param device Thiết bị thực hiện logout
   * @param ipAddress IP khi logout
   * @param userAgent user-agent khi logout
   */
  endSessionByToken(
    token: string,
    device?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null
  ): Promise<void>;
}
