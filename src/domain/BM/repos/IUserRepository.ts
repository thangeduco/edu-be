// BM/repos/IUserRepository.ts

import { BmUser, BmProfile, BmParentStudentLink, BmClass } from '../models/UserModels';

export interface IUserRepository {
  findById(id: number): Promise<BmUser | null>;
  findByEmailOrPhone(emailOrPhone: string): Promise<BmUser | null>;
  createUser(user: Omit<BmUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<BmUser>;
  updateUser(user: BmUser): Promise<void>;
}

export interface IProfileRepository {
  getProfileByUserId(userId: number): Promise<BmProfile | null>;
  upsertProfile(profile: Omit<BmProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<BmProfile>;
}

export interface IParentStudentLinkRepository {
  createLink(link: Omit<BmParentStudentLink, 'id' | 'createdAt' | 'updatedAt'>): Promise<BmParentStudentLink>;
  listChildrenOfParent(parentId: number): Promise<BmParentStudentLink[]>;
  listParentsOfStudent(studentId: number): Promise<BmParentStudentLink[]>;
}

export interface IClassRepository {
  listClasses(grade?: string): Promise<BmClass[]>;
  findById(id: number): Promise<BmClass | null>;
}
