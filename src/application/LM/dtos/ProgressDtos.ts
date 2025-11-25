// dtos/ProgressDtos.ts

export interface CourseProgressDto {
  studentId: number;
  courseId: number;
  progressPercent: number;
  videosCompleted: number;
  worksheetsCompleted: number;
  totalScore?: number;
  status: string;
  lastActivityAt?: string;
}

export interface WeekProgressDto {
  studentId: number;
  courseWeekId: number;
  progressPercent: number;
  videosCompleted: number;
  worksheetsCompleted: number;
  status: string;
  lastActivityAt?: string;
}

export interface GetStudentCourseProgressInput {
  studentId: number;
  courseId: number;
}

export interface GetStudentCourseProgressOutput {
  progress?: CourseProgressDto;
}

export interface GetStudentCourseWeeksProgressInput {
  studentId: number;
  courseId: number;
}

export interface GetStudentCourseWeeksProgressOutput {
  weeks: WeekProgressDto[];
}

export interface StudentDashboardDto {
  studentId: number;
  courseId: number;
  courseProgress?: CourseProgressDto;
  recentWorksheets: any[];
  recentVideos: any[];
  badges: any[];
}

export interface GetStudentDashboardInput {
  studentId: number;
  courseId: number;
}

export interface GetStudentDashboardOutput {
  dashboard: StudentDashboardDto;
}

export interface GetParentChildCourseProgressInput {
  parentId: number;
  studentId: number;
  courseId: number;
}

export interface GetParentChildCourseProgressOutput {
  progress?: CourseProgressDto;
}

export interface ChildProgressSummaryDto {
  studentId: number;
  studentName?: string;
  courseId: number;
  progressPercent: number;
  status: string;
}

export interface GetParentChildrenSummaryInput {
  parentId: number;
}

export interface GetParentChildrenSummaryOutput {
  children: ChildProgressSummaryDto[];
}
