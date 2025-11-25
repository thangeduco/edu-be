// src/application/CM/dtos/CourseDtos.ts

export interface CourseSummaryDto {
  id: number;
  code: string;
  title: string;
  grade?: string;
  level?: string;
  status?: string;
  coverImageUrl?: string;
}

export interface ListCoursesInput {
  grade?: string;
  level?: string;
  status?: string;
}

export interface ListCoursesOutput {
  courses: CourseSummaryDto[];
}

export interface GetCourseDetailInput {
  courseId: number;
}

export interface CourseDetailDto extends CourseSummaryDto {
  description?: string;
  createdBy?: number;
}

export interface GetCourseDetailOutput {
  course?: CourseDetailDto;
}
