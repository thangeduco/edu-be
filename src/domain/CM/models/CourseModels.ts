// CM/models/CourseModels.ts

export interface CmCourse {
  id: number;
  code: string;
  title: string;
  grade?: string;
  level?: string;
  status: string;
  coverImageUrl?: string;
  description?: string;
  createdBy?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CmCourseWeek {
  id: number;
  courseId: number;
  weekNumber: number;
  title: string;
  description?: string;
  objective?: string;
  createdAt: Date;
  updatedAt: Date;
}
