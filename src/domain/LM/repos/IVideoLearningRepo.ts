// LM/repos/IVideoLearningRepository.ts

import {
  LmVideoSession,
  LmVideoProgress,
} from '../models/VideoLearningModels';

export interface IVideoSessionRepo {
  createSession(session: Omit<LmVideoSession, 'id'>): Promise<LmVideoSession>;
  updateSession(session: Partial<LmVideoSession> & { id: number }): Promise<void>;
}

export interface IVideoProgressRepo {
  getProgress(studentId: number, videoId: number): Promise<LmVideoProgress | null>;
  upsertProgress(progress: Omit<LmVideoProgress, 'id'>): Promise<LmVideoProgress>;
}
