"use strict";
// src/application/BM/use-cases/relations/RelationUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGroupDetailUseCase = exports.RemoveGroupMemberUseCase = exports.AddGroupMemberUseCase = exports.CreateGroupUseCase = void 0;
// TODO: import repo interfaces khi có domain
// import { IGroupRepository } from '../../../domain/BM/repos/IGroupRepository';
class CreateGroupUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: insert vào bm_groups
        return {
            success: true,
            groupId: 1,
            message: 'CreateGroupUseCase not implemented yet',
        };
    }
}
exports.CreateGroupUseCase = CreateGroupUseCase;
class AddGroupMemberUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: insert vào bm_group_members
        return {
            success: true,
            message: 'AddGroupMemberUseCase not implemented yet',
        };
    }
}
exports.AddGroupMemberUseCase = AddGroupMemberUseCase;
class RemoveGroupMemberUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: update status hoặc xoá khỏi bm_group_members
        return {
            success: true,
            message: 'RemoveGroupMemberUseCase not implemented yet',
        };
    }
}
exports.RemoveGroupMemberUseCase = RemoveGroupMemberUseCase;
class GetGroupDetailUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: lấy group + members
        return {
            group: undefined,
        };
    }
}
exports.GetGroupDetailUseCase = GetGroupDetailUseCase;
