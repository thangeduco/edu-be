// src/application/BM/use-cases/users/UserUseCases.ts

import {
  CreateStudentForParentInput,
  CreateStudentForParentOutput,
  ListParentStudentsInput,
  ListParentStudentsOutput,
  GetStudentDetailInput,
  GetStudentDetailOutput,
  UpdateStudentProfileInput,
  UpdateStudentProfileOutput,
  GetMyProfileInput,
  GetMyProfileOutput,
  UpdateMyProfileInput,
  UpdateMyProfileOutput,
  ListClassesInput,
  ListClassesOutput,
} from '../../dtos/UserDtos';

// TODO: import interfaces khi anh tạo xong ở domain
// import { IUserRepository } from '../../../domain/BM/repos/IUserRepository';
// import { IClassRepository } from '../../../domain/BM/repos/IClassRepository';

export class CreateStudentForParentUseCase {
  constructor() {}

  async execute(_input: CreateStudentForParentInput): Promise<CreateStudentForParentOutput> {
    // TODO: tạo user STUDENT và profile, link parent-student
    return {
      success: true,
      studentId: 11,
      message: 'CreateStudentForParentUseCase not implemented yet',
    };
  }
}

export class ListParentStudentsUseCase {
  constructor() {}

  async execute(_input: ListParentStudentsInput): Promise<ListParentStudentsOutput> {
    // TODO: lấy danh sách children theo parent
    return {
      students: [],
    };
  }
}

export class GetStudentDetailUseCase {
  constructor() {}

  async execute(_input: GetStudentDetailInput): Promise<GetStudentDetailOutput> {
    // TODO: lấy thông tin chi tiết học sinh
    return {
      student: undefined,
    };
  }
}

export class UpdateStudentProfileUseCase {
  constructor() {}

  async execute(_input: UpdateStudentProfileInput): Promise<UpdateStudentProfileOutput> {
    // TODO: update profile học sinh
    return {
      success: true,
      message: 'UpdateStudentProfileUseCase not implemented yet',
    };
  }
}

export class GetMyProfileUseCase {
  constructor() {}

  async execute(_input: GetMyProfileInput): Promise<GetMyProfileOutput> {
    // TODO: lấy profile user hiện tại
    return {
      profile: undefined,
    };
  }
}

export class UpdateMyProfileUseCase {
  constructor() {}

  async execute(_input: UpdateMyProfileInput): Promise<UpdateMyProfileOutput> {
    // TODO: cập nhật profile user hiện tại
    return {
      success: true,
      message: 'UpdateMyProfileUseCase not implemented yet',
    };
  }
}

export class ListClassesUseCase {
  constructor() {}

  async execute(_input: ListClassesInput): Promise<ListClassesOutput> {
    // TODO: query bm_classes theo grade nếu có
    return {
      classes: [],
    };
  }
}
