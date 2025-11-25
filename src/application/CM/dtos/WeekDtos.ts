// src/application/CM/dtos/WeekDtos.ts

export interface WeekSummaryDto {
  id: number;
  courseId: number;
  weekNumber: number;
  title: string;
  description?: string;
  objective?: string;
}

export interface GetCourseWeeksInput {
  courseId: number;
}

export interface GetCourseWeeksOutput {
  weeks: WeekSummaryDto[];
}

export interface GetWeekDetailInput {
  weekId: number;
}

export interface GetWeekDetailOutput {
  week?: WeekSummaryDto;
}
