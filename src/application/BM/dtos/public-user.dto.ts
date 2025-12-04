// application/BM/dtos/public-user.dto.ts

import { BMUserProfile } from '../../../domain/BM/models/user.model';

/**
 * PublicUser là DTO trả ra ngoài API
 * Được tạo từ sanitizeUser() → đảm bảo không bao giờ chứa passwordHash
 */
export interface PublicUser {
  id: number;
  fullName: string;

  email?: string;
  phone?: string;

  status: string;
  role: string;

  createdAt: string;

  profile?: BMUserProfile;

  // Mở rộng dành cho hệ thống học tập (optional)
  badgeCount?: number;
  rank?: string;
}
