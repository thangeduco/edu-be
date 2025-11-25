// CM/repos/ICourseRepository.ts

import { CmCourse, CmCourseWeek } from '../models/CourseModels';

export interface ICourseRepository {
  listCourses(filter?: { grade?: string; level?: string; status?: string }): Promise<CmCourse[]>;
  findById(id: number): Promise<CmCourse | null>;
}

export interface ICourseWeekRepository {
  listWeeks(courseId: number): Promise<CmCourseWeek[]>;
  findById(id: number): Promise<CmCourseWeek | null>;
}
