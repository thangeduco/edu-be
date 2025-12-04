// domain/BM/models/user.model.ts

/**
 * Hồ sơ người dùng mở rộng (bm_user_profiles)
 */
export interface BMUserProfile {
  avatarImage?: string;   // avatar_image
  dob?: string;           // YYYY-MM-DD
  gender?: 'male' | 'female' | 'other' | string;
  grade?: number;         // Lớp (1–12)
  slogen?: string;
}

/**
 * User đầy đủ (dữ liệu internal, có passwordHash)
 * mapping từ bảng bm_users + bm_user_profiles
 */
export interface BMUser {
  id: number;
  fullName: string;
  email: string | null;
  phone: string | null;

  passwordHash: string;

  role: 'admin' | 'parent' | 'student' | string;
  status: 'active' | 'inactive' | 'banned' | string;

  createdAt: string; // ISO timestamp

  profile?: BMUserProfile;
}
