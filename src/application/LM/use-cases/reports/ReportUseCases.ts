// use-cases/reports/ReportUseCases.ts

import {
  GetStudentWeeklyReportsInput,
  GetStudentWeeklyReportsOutput,
  GetParentWeeklyReportsInput,
  GetParentWeeklyReportsOutput,
} from '../../dtos/ReportDtos';

// TODO: IWeeklyReportRepository

export class GetStudentWeeklyReportsUseCase {
  constructor(
    // private weeklyReportRepo: IWeeklyReportRepository,
  ) {}

  async execute(
    _input: GetStudentWeeklyReportsInput,
  ): Promise<GetStudentWeeklyReportsOutput> {
    // TODO: query lm_weekly_reports theo student/course
    return { reports: [] };
  }
}

export class GetParentWeeklyReportsUseCase {
  constructor(
    // private weeklyReportRepo: IWeeklyReportRepository,
  ) {}

  async execute(
    _input: GetParentWeeklyReportsInput,
  ): Promise<GetParentWeeklyReportsOutput> {
    // TODO: query lm_weekly_reports theo parent + student
    return { reports: [] };
  }
}
