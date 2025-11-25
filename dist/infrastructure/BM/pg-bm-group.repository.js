"use strict";
// BM/pg-bm-group.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgGroupMemberRepository = exports.PgGroupRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgGroupRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createGroup(group) {
        // TODO: INSERT INTO bm_groups ...
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        // TODO: SELECT ... FROM bm_groups WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async listGroupsOfUser(_userId) {
        // TODO: SELECT g.* FROM bm_groups g JOIN bm_group_members m ON g.id = m.group_id WHERE m.user_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgGroupRepository = PgGroupRepository;
class PgGroupMemberRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async addMember(member) {
        // TODO: INSERT INTO bm_group_members ...
        throw new Error('Method not implemented.');
    }
    async removeMember(_groupId, _userId) {
        // TODO: UPDATE/DELETE bm_group_members ...
        throw new Error('Method not implemented.');
    }
    async listMembers(_groupId) {
        // TODO: SELECT ... FROM bm_group_members WHERE group_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgGroupMemberRepository = PgGroupMemberRepository;
