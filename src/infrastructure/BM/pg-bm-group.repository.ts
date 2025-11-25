// BM/pg-bm-group.repository.ts

import { Pool } from 'pg';
import { pgPool } from '../db/pgClient';
import {
  IGroupRepository,
  IGroupMemberRepository,
} from '../../domain/BM/repos';
import { BmGroup, BmGroupMember } from '../../domain/BM/models/UserModels'; // Adjust the path if needed

export class PgGroupRepository implements IGroupRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async createGroup(group: Omit<BmGroup, "id" | "createdAt" | "updatedAt">): Promise<BmGroup> {
    // TODO: INSERT INTO bm_groups ...
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<BmGroup> {
    // TODO: SELECT ... FROM bm_groups WHERE id = $1
    throw new Error('Method not implemented.');
  }

  async listGroupsOfUser(_userId: number): Promise<BmGroup[]> {
    // TODO: SELECT g.* FROM bm_groups g JOIN bm_group_members m ON g.id = m.group_id WHERE m.user_id = $1
    throw new Error('Method not implemented.');
  }
}

export class PgGroupMemberRepository implements IGroupMemberRepository {
  constructor(private readonly pool: Pool = pgPool) {}

  async addMember(member: Omit<BmGroupMember, "id" | "joinedAt" | "leftAt">): Promise<BmGroupMember> {
    // TODO: INSERT INTO bm_group_members ...
    throw new Error('Method not implemented.');
  }

  async removeMember(_groupId: number, _userId: number): Promise<void> {
    // TODO: UPDATE/DELETE bm_group_members ...
    throw new Error('Method not implemented.');
  }

  async listMembers(_groupId: number): Promise<BmGroupMember[]> {
    // TODO: SELECT ... FROM bm_group_members WHERE group_id = $1
    throw new Error('Method not implemented.');
  }
}
