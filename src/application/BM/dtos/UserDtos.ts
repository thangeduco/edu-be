// src/application/BM/dtos/UserDtos.ts

export interface CreateStudentForParentInput {
  parentId: number;
  fullName: string;
  grade?: string;
  schoolName?: string;
}

export interface CreateStudentForParentOutput {
  success: boolean;
  studentId?: number;
  message?: string;
}

export interface ListParentStudentsInput {
  parentId: number;
}

export interface StudentSummaryDto {
  id: number;
  fullName: string;
  grade?: string;
  schoolName?: string;
}

export interface ListParentStudentsOutput {
  students: StudentSummaryDto[];
}

export interface GetStudentDetailInput {
  studentId: number;
}

export interface StudentDetailDto {
  id: number;
  fullName: string;
  grade?: string;
  schoolName?: string;
  avatarUrl?: string;
  slogan?: string;
}

export interface GetStudentDetailOutput {
  student?: StudentDetailDto;
}

export interface UpdateStudentProfileInput {
  studentId: number;
  fullName?: string;
  grade?: string;
  schoolName?: string;
  avatarUrl?: string;
  slogan?: string;
}

export interface UpdateStudentProfileOutput {
  success: boolean;
  message?: string;
}

export interface GetMyProfileInput {
  userId: number;
}

export interface MyProfileDto {
  id: number;
  fullName: string;
  email?: string;
  phone?: string;
  role: string;
  avatarUrl?: string;
  slogan?: string;
}

export interface GetMyProfileOutput {
  profile?: MyProfileDto;
}

export interface UpdateMyProfileInput {
  userId: number;
  fullName?: string;
  avatarUrl?: string;
  slogan?: string;
}

export interface UpdateMyProfileOutput {
  success: boolean;
  message?: string;
}

export interface ListClassesInput {
  grade?: string;
}

export interface ClassSummaryDto {
  id: number;
  code: string;
  name: string;
  grade?: string;
}

export interface ListClassesOutput {
  classes: ClassSummaryDto[];
}
