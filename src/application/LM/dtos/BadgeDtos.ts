// dtos/BadgeDtos.ts

export interface BadgeDto {
  id: number;
  code: string;
  name: string;
  description?: string;
  iconKey?: string;
}

export interface StudentBadgeDto {
  id: number;
  badgeId: number;
  studentId: number;
  courseId?: number;
  earnedAt: string;
  reason?: string;
}

export interface AwardBadgeInput {
  studentId: number;
  badgeCode: string;
  courseId?: number;
  reason?: string;
}

export interface AwardBadgeOutput {
  success: boolean;
  studentBadgeId?: number;
  message?: string;
}
