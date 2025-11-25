// CM/repos/IVideoLectureRepository.ts

import { CmVideoLecture } from '../models/VideoModels';

export interface IVideoLectureRepository {
  findByLessonId(lessonId: number): Promise<CmVideoLecture | null>;
  findById(id: number): Promise<CmVideoLecture | null>;
}
