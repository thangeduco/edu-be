// LM/repos/IProgressRepository.ts

import {
  LmStudentCourseProgress,
  LmWeekProgress,
} from '../models/ProgressModels';

export interface ICourseProgressRepository {
  getCourseProgress(studentId: number, courseId: number): Promise<LmStudentCourseProgress | null>;
  upsertCourseProgress(
    progress: Omit<LmStudentCourseProgress, 'id'>,
  ): Promise<LmStudentCourseProgress>;
}

export interface IWeekProgressRepository {
  listWeeksProgress(studentId: number, courseId: number): Promise<LmWeekProgress[]>;
}
