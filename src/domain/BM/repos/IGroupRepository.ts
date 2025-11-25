// BM/repos/IGroupRepository.ts

import { BmGroup, BmGroupMember } from '../models/UserModels';

export interface IGroupRepository {
  createGroup(group: Omit<BmGroup, 'id' | 'createdAt' | 'updatedAt'>): Promise<BmGroup>;
  findById(id: number): Promise<BmGroup | null>;
  listGroupsOfUser(userId: number): Promise<BmGroup[]>;
}

export interface IGroupMemberRepository {
  addMember(member: Omit<BmGroupMember, 'id' | 'joinedAt' | 'leftAt'>): Promise<BmGroupMember>;
  removeMember(groupId: number, userId: number): Promise<void>;
  listMembers(groupId: number): Promise<BmGroupMember[]>;
}
