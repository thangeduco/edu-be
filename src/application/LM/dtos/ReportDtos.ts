// dtos/ReportDtos.ts

export interface WeeklyReportDto {
  id: number;
  studentId: number;
  courseId: number;
  weekStartDate: string;
  weekEndDate: string;
  summaryJson: any;
  generatedAt: string;
  sentToParent: boolean;
  parentId?: number;
}

export interface GetStudentWeeklyReportsInput {
  studentId: number;
  courseId?: number;
}

export interface GetStudentWeeklyReportsOutput {
  reports: WeeklyReportDto[];
}

export interface GetParentWeeklyReportsInput {
  parentId: number;
  studentId: number;
  courseId?: number;
}

export interface GetParentWeeklyReportsOutput {
  reports: WeeklyReportDto[];
}
