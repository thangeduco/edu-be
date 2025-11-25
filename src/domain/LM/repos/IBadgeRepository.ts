// LM/repos/IBadgeRepository.ts

import { LmBadge, LmStudentBadge } from '../models/BadgeModels';

export interface IBadgeRepository {
  findByCode(code: string): Promise<LmBadge | null>;
  listBadges(): Promise<LmBadge[]>;
}

export interface IStudentBadgeRepository {
  awardBadge(
    sb: Omit<LmStudentBadge, 'id'>,
  ): Promise<LmStudentBadge>;
  listBadgesOfStudent(studentId: number): Promise<LmStudentBadge[]>;
}
