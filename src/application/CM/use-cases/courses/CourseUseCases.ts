// src/application/CM/use-cases/courses/CourseUseCases.ts

import {
  ListCoursesInput,
  ListCoursesOutput,
  GetCourseDetailInput,
  GetCourseDetailOutput,
} from '../../dtos/CourseDtos';
import {
  GetCourseWeeksInput,
  GetCourseWeeksOutput,
} from '../../dtos/WeekDtos';

// TODO: import các repo interface khi anh tạo domain
// import { ICourseRepository } from '../../../domain/CM/repos/ICourseRepository';
// import { ICourseWeekRepository } from '../../../domain/CM/repos/ICourseWeekRepository';

export class ListCoursesUseCase {
  constructor(
    // private courseRepo: ICourseRepository,
  ) {}

  async execute(_input: ListCoursesInput): Promise<ListCoursesOutput> {
    // TODO: query cm_courses theo grade/level/status
    return { courses: [] };
  }
}

export class GetCourseDetailUseCase {
  constructor(
    // private courseRepo: ICourseRepository,
  ) {}

  async execute(_input: GetCourseDetailInput): Promise<GetCourseDetailOutput> {
    // TODO: query cm_courses by id
    return { course: undefined };
  }
}

export class GetCourseWeeksUseCase {
  constructor(
    // private weekRepo: ICourseWeekRepository,
  ) {}

  async execute(_input: GetCourseWeeksInput): Promise<GetCourseWeeksOutput> {
    // TODO: query cm_course_weeks theo courseId
    return { weeks: [] };
  }
}
