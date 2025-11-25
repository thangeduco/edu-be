// LM/pg-lm-badge.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IBadgeRepository,
  IStudentBadgeRepository,
} from '../../domain/LM/repos';
import { LmStudentBadge, LmBadge } from '../../domain/LM/models/BadgeModels'; // Adjust the import path if needed

export class PgBadgeRepository implements IBadgeRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async findByCode(_code: string): Promise<LmBadge> {
    // TODO: SELECT ... FROM lm_badges WHERE code = $1
    throw new Error('Method not implemented.');
  }

  async listBadges(): Promise<LmBadge[]> {
    // TODO: SELECT ... FROM lm_badges
    throw new Error('Method not implemented.');
  }
}

export class PgStudentBadgeRepository implements IStudentBadgeRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async awardBadge(sb: Omit<LmStudentBadge, "id">): Promise<LmStudentBadge> {
    // TODO: INSERT INTO lm_student_badges ...
    throw new Error('Method not implemented.');
  }

  async listBadgesOfStudent(_studentId: number): Promise<LmStudentBadge[]> {
    // TODO: SELECT ... FROM lm_student_badges WHERE student_id = $1
    throw new Error('Method not implemented.');
  }
}
