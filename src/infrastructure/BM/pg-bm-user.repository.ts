// BM/pg-bm-user.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IUserRepository,
  IProfileRepository,
  IParentStudentLinkRepository,
  IClassRepository,
} from '../../domain/BM/repos';
import { BmUser, BmProfile, BmParentStudentLink, BmClass } from '../../domain/BM/models/UserModels';

export class PgUserRepository implements IUserRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async findById(id: number): Promise<BmUser> {
    // TODO: implement SELECT ... FROM bm_users WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async findByEmailOrPhone(_emailOrPhone: string): Promise<BmUser> {
    // TODO: implement SELECT ... WHERE email = $1 OR phone = $1
    throw new Error('Method not implemented.');
  }

  async createUser(user: Omit<BmUser, "id" | "createdAt" | "updatedAt">): Promise<BmUser> {
    // TODO: implement INSERT INTO bm_users ...
    throw new Error('Method not implemented.');
  }

  async updateUser(_user: any): Promise<void> {
    // TODO: implement UPDATE bm_users ...
    throw new Error('Method not implemented.');
  }
}

export class PgProfileRepository implements IProfileRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async getProfileByUserId(_userId: number): Promise<BmProfile> {
    // TODO: SELECT ... FROM bm_profiles WHERE user_id = $1
    throw new Error('Method not implemented.');
  }

  async upsertProfile(profile: Omit<BmProfile, "id" | "createdAt" | "updatedAt">): Promise<BmProfile> {
    // TODO: UPSERT bm_profiles ...
    throw new Error('Method not implemented.');
  }
}

export class PgParentStudentLinkRepository implements IParentStudentLinkRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createLink(link: Omit<BmParentStudentLink, "id" | "createdAt" | "updatedAt">): Promise<BmParentStudentLink> {
    // TODO: INSERT INTO bm_parent_student_links ...
    throw new Error('Method not implemented.');
  }

  async listChildrenOfParent(_parentId: number): Promise<BmParentStudentLink[]> {
    // TODO: SELECT ... WHERE parent_id = $1
    throw new Error('Method not implemented.');
  }

  async listParentsOfStudent(_studentId: number): Promise<BmParentStudentLink[]> {
    // TODO: SELECT ... WHERE student_id = $1
    throw new Error('Method not implemented.');
  }
}

export class PgClassRepository implements IClassRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async listClasses(_grade?: string): Promise<BmClass[]> {
    // TODO: SELECT ... FROM bm_classes [WHERE grade = $1]
    throw new Error('Method not implemented.');
  }

  async findById(_id: number): Promise<BmClass> {
    // TODO: SELECT ... FROM bm_classes WHERE id = $1
    throw new Error('Method not implemented.');
  }
}
