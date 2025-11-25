// BM/models/UserModels.ts

export type BmUserRole = 'PARENT' | 'STUDENT' | 'TEACHER' | 'ADMIN' | string;

export interface BmUser {
  id: number;
  email?: string;
  phone?: string;
  passwordHash: string;
  role: BmUserRole;
  status: string; // ACTIVE, INACTIVE, LOCKED...
  createdAt: Date;
  updatedAt: Date;
}

export interface BmProfile {
  id: number;
  userId: number;
  fullName: string;
  avatarUrl?: string;
  slogan?: string;
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmParentStudentLink {
  id: number;
  parentId: number;
  studentId: number;
  relationType?: string; // FATHER, MOTHER...
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmClass {
  id: number;
  code: string;
  name: string;
  grade?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmGroup {
  id: number;
  ownerId: number;
  name: string;
  type: string; // FAMILY, CLASS, STUDY_GROUP...
  description?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BmGroupMember {
  id: number;
  groupId: number;
  userId: number;
  role?: string; // PARENT, STUDENT...
  status: string;
  joinedAt: Date;
  leftAt?: Date;
}
