// LM/repos/IRankingReportRepository.ts

import {
  LmRankingDaily,
  LmWeeklyReport,
} from '../models/RankingReportModels';

export interface IRankingRepository {
  listCourseRankings(courseId: number, date: Date): Promise<LmRankingDaily[]>;
  listGroupRankings(groupId: number, date: Date): Promise<LmRankingDaily[]>;
}

export interface IWeeklyReportRepository {
  listStudentReports(studentId: number, courseId?: number): Promise<LmWeeklyReport[]>;
  listParentReports(parentId: number, studentId: number, courseId?: number): Promise<LmWeeklyReport[]>;
}
