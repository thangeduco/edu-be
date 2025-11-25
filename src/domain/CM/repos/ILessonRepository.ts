// CM/repos/ILessonRepository.ts

import { CmLesson } from '../models/LessonModels';

export interface ILessonRepository {
  listLessonsByWeek(weekId: number): Promise<CmLesson[]>;
  findById(id: number): Promise<CmLesson | null>;
}
