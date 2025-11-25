// use-cases/progress/ProgressUseCases.ts

import {
  GetStudentCourseProgressInput,
  GetStudentCourseProgressOutput,
  GetStudentCourseWeeksProgressInput,
  GetStudentCourseWeeksProgressOutput,
  GetStudentDashboardInput,
  GetStudentDashboardOutput,
  GetParentChildCourseProgressInput,
  GetParentChildCourseProgressOutput,
  GetParentChildrenSummaryInput,
  GetParentChildrenSummaryOutput,
} from '../../dtos/ProgressDtos';

// TODO: ICourseProgressRepository, IWeekProgressRepository, Dashboard aggregators

export class GetStudentCourseProgressUseCase {
  constructor(
    // private courseProgressRepo: ICourseProgressRepository,
  ) {}

  async execute(
    _input: GetStudentCourseProgressInput,
  ): Promise<GetStudentCourseProgressOutput> {
    // TODO: query lm_student_course_progress
    return { progress: undefined };
  }
}

export class GetStudentCourseWeeksProgressUseCase {
  constructor(
    // private weekProgressRepo: IWeekProgressRepository,
  ) {}

  async execute(
    _input: GetStudentCourseWeeksProgressInput,
  ): Promise<GetStudentCourseWeeksProgressOutput> {
    // TODO: query lm_week_progress + join tuần
    return { weeks: [] };
  }
}

export class GetStudentDashboardUseCase {
  constructor() {}

  async execute(_input: GetStudentDashboardInput): Promise<GetStudentDashboardOutput> {
    // TODO: tổng hợp progress, worksheet gần đây, video gần đây, badges
    return {
      dashboard: {
        studentId: _input.studentId,
        courseId: _input.courseId,
        courseProgress: undefined,
        recentWorksheets: [],
        recentVideos: [],
        badges: [],
      },
    };
  }
}

export class GetParentChildCourseProgressUseCase {
  constructor(
    // private courseProgressRepo: ICourseProgressRepository,
  ) {}

  async execute(
    _input: GetParentChildCourseProgressInput,
  ): Promise<GetParentChildCourseProgressOutput> {
    // TODO: verify parent-child link + trả progress của child
    return { progress: undefined };
  }
}

export class GetParentChildrenSummaryUseCase {
  constructor() {}

  async execute(
    _input: GetParentChildrenSummaryInput,
  ): Promise<GetParentChildrenSummaryOutput> {
    // TODO: aggregate progress theo từng con
    return { children: [] };
  }
}
