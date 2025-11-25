// src/application/BM/use-cases/relations/RelationUseCases.ts

// Anh có thể tạo thêm DTO riêng nếu cần
export interface CreateGroupInput {
  ownerId: number;
  name: string;
  type: string;
  description?: string;
}

export interface CreateGroupOutput {
  success: boolean;
  groupId?: number;
  message?: string;
}

export interface AddGroupMemberInput {
  groupId: number;
  userId: number;
  role?: string;
}

export interface AddGroupMemberOutput {
  success: boolean;
  message?: string;
}

export interface RemoveGroupMemberInput {
  groupId: number;
  userId: number;
}

export interface RemoveGroupMemberOutput {
  success: boolean;
  message?: string;
}

export interface GetGroupDetailInput {
  groupId: number;
}

export interface GroupMemberDto {
  userId: number;
  fullName?: string;
  role?: string;
  status?: string;
}

export interface GroupDetailDto {
  id: number;
  name: string;
  type: string;
  ownerId: number;
  description?: string;
  members: GroupMemberDto[];
}

export interface GetGroupDetailOutput {
  group?: GroupDetailDto;
}

// TODO: import repo interfaces khi có domain
// import { IGroupRepository } from '../../../domain/BM/repos/IGroupRepository';

export class CreateGroupUseCase {
  constructor() {}

  async execute(_input: CreateGroupInput): Promise<CreateGroupOutput> {
    // TODO: insert vào bm_groups
    return {
      success: true,
      groupId: 1,
      message: 'CreateGroupUseCase not implemented yet',
    };
  }
}

export class AddGroupMemberUseCase {
  constructor() {}

  async execute(_input: AddGroupMemberInput): Promise<AddGroupMemberOutput> {
    // TODO: insert vào bm_group_members
    return {
      success: true,
      message: 'AddGroupMemberUseCase not implemented yet',
    };
  }
}

export class RemoveGroupMemberUseCase {
  constructor() {}

  async execute(_input: RemoveGroupMemberInput): Promise<RemoveGroupMemberOutput> {
    // TODO: update status hoặc xoá khỏi bm_group_members
    return {
      success: true,
      message: 'RemoveGroupMemberUseCase not implemented yet',
    };
  }
}

export class GetGroupDetailUseCase {
  constructor() {}

  async execute(_input: GetGroupDetailInput): Promise<GetGroupDetailOutput> {
    // TODO: lấy group + members
    return {
      group: undefined,
    };
  }
}
