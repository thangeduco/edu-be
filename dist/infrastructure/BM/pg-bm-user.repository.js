"use strict";
// BM/pg-bm-user.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgClassRepository = exports.PgParentStudentLinkRepository = exports.PgProfileRepository = exports.PgUserRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgUserRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async findById(id) {
        // TODO: implement SELECT ... FROM bm_users WHERE id = $1
        throw new Error('Method not implemented.');
    }
    async findByEmailOrPhone(_emailOrPhone) {
        // TODO: implement SELECT ... WHERE email = $1 OR phone = $1
        throw new Error('Method not implemented.');
    }
    async createUser(user) {
        // TODO: implement INSERT INTO bm_users ...
        throw new Error('Method not implemented.');
    }
    async updateUser(_user) {
        // TODO: implement UPDATE bm_users ...
        throw new Error('Method not implemented.');
    }
}
exports.PgUserRepository = PgUserRepository;
class PgProfileRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async getProfileByUserId(_userId) {
        // TODO: SELECT ... FROM bm_profiles WHERE user_id = $1
        throw new Error('Method not implemented.');
    }
    async upsertProfile(profile) {
        // TODO: UPSERT bm_profiles ...
        throw new Error('Method not implemented.');
    }
}
exports.PgProfileRepository = PgProfileRepository;
class PgParentStudentLinkRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createLink(link) {
        // TODO: INSERT INTO bm_parent_student_links ...
        throw new Error('Method not implemented.');
    }
    async listChildrenOfParent(_parentId) {
        // TODO: SELECT ... WHERE parent_id = $1
        throw new Error('Method not implemented.');
    }
    async listParentsOfStudent(_studentId) {
        // TODO: SELECT ... WHERE student_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgParentStudentLinkRepository = PgParentStudentLinkRepository;
class PgClassRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listClasses(_grade) {
        // TODO: SELECT ... FROM bm_classes [WHERE grade = $1]
        throw new Error('Method not implemented.');
    }
    async findById(_id) {
        // TODO: SELECT ... FROM bm_classes WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgClassRepository = PgClassRepository;
