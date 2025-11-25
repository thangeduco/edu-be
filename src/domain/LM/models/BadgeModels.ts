// LM/models/BadgeModels.ts

export interface LmBadge {
  id: number;
  code: string;
  name: string;
  description?: string;
  iconKey?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LmStudentBadge {
  id: number;
  badgeId: number;
  studentId: number;
  courseId?: number;
  earnedAt: Date;
  reason?: string;
}
