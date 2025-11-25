// LM/repos/IVideoLearningRepository.ts

import {
  LmVideoSession,
  LmVideoProgress,
} from '../models/VideoLearningModels';

export interface IVideoSessionRepository {
  createSession(session: Omit<LmVideoSession, 'id'>): Promise<LmVideoSession>;
  updateSession(session: LmVideoSession): Promise<void>;
}

export interface IVideoProgressRepository {
  getProgress(studentId: number, videoId: number): Promise<LmVideoProgress | null>;
  upsertProgress(progress: Omit<LmVideoProgress, 'id'>): Promise<LmVideoProgress>;
}
