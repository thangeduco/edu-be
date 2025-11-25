// src/application/CM/dtos/LessonDtos.ts

export interface LessonSummaryDto {
  id: number;
  courseWeekId: number;
  orderIndex: number;
  title: string;
  lessonType?: string;
  isOptional?: boolean;
}

export interface GetWeekLessonsInput {
  weekId: number;
}

export interface GetWeekLessonsOutput {
  lessons: LessonSummaryDto[];
}

export interface GetLessonDetailInput {
  lessonId: number;
}

export interface LessonDetailDto extends LessonSummaryDto {
  description?: string;
}

export interface GetLessonDetailOutput {
  lesson?: LessonDetailDto;
}
