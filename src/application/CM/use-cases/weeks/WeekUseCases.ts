// src/application/CM/use-cases/weeks/WeekUseCases.ts

import {
  GetWeekDetailInput,
  GetWeekDetailOutput,
} from '../../dtos/WeekDtos';
import {
  GetWeekLessonsInput,
  GetWeekLessonsOutput,
} from '../../dtos/LessonDtos';

// TODO: ICourseWeekRepository, ILessonRepository

export class GetWeekDetailUseCase {
  constructor(
    // private weekRepo: ICourseWeekRepository,
  ) {}

  async execute(_input: GetWeekDetailInput): Promise<GetWeekDetailOutput> {
    // TODO: lấy chi tiết cm_course_weeks
    return { week: undefined };
  }
}

export class GetWeekLessonsUseCase {
  constructor(
    // private lessonRepo: ILessonRepository,
  ) {}

  async execute(_input: GetWeekLessonsInput): Promise<GetWeekLessonsOutput> {
    // TODO: query cm_lessons theo course_week_id
    return { lessons: [] };
  }
}
