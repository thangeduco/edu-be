// dtos/RuntimeDtos.ts

export interface RuntimeNextStepInput {
  videoId: number;
  currentTimestampSec: number;
  currentEventId?: number;
  studentId?: number;
  answerContext?: any; // thông tin vừa trả lời quiz, v.v.
}

export type RuntimeActionType =
  | 'SHOW_QUIZ'
  | 'JUMP_TO_VIDEO'
  | 'SHOW_HINT'
  | 'SHOW_POPUP'
  | 'NONE';

export interface RuntimeNextStepOutput {
  action: RuntimeActionType;
  eventId?: number;
  questionId?: number;
  nextVideoId?: number;
  metadata?: any;
}
