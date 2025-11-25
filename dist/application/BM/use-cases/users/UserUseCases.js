"use strict";
// src/application/BM/use-cases/users/UserUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClassesUseCase = exports.UpdateMyProfileUseCase = exports.GetMyProfileUseCase = exports.UpdateStudentProfileUseCase = exports.GetStudentDetailUseCase = exports.ListParentStudentsUseCase = exports.CreateStudentForParentUseCase = void 0;
// TODO: import interfaces khi anh tạo xong ở domain
// import { IUserRepository } from '../../../domain/BM/repos/IUserRepository';
// import { IClassRepository } from '../../../domain/BM/repos/IClassRepository';
class CreateStudentForParentUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: tạo user STUDENT và profile, link parent-student
        return {
            success: true,
            studentId: 11,
            message: 'CreateStudentForParentUseCase not implemented yet',
        };
    }
}
exports.CreateStudentForParentUseCase = CreateStudentForParentUseCase;
class ListParentStudentsUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: lấy danh sách children theo parent
        return {
            students: [],
        };
    }
}
exports.ListParentStudentsUseCase = ListParentStudentsUseCase;
class GetStudentDetailUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: lấy thông tin chi tiết học sinh
        return {
            student: undefined,
        };
    }
}
exports.GetStudentDetailUseCase = GetStudentDetailUseCase;
class UpdateStudentProfileUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: update profile học sinh
        return {
            success: true,
            message: 'UpdateStudentProfileUseCase not implemented yet',
        };
    }
}
exports.UpdateStudentProfileUseCase = UpdateStudentProfileUseCase;
class GetMyProfileUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: lấy profile user hiện tại
        return {
            profile: undefined,
        };
    }
}
exports.GetMyProfileUseCase = GetMyProfileUseCase;
class UpdateMyProfileUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: cập nhật profile user hiện tại
        return {
            success: true,
            message: 'UpdateMyProfileUseCase not implemented yet',
        };
    }
}
exports.UpdateMyProfileUseCase = UpdateMyProfileUseCase;
class ListClassesUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: query bm_classes theo grade nếu có
        return {
            classes: [],
        };
    }
}
exports.ListClassesUseCase = ListClassesUseCase;
