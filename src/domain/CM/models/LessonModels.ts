// CM/models/LessonModels.ts

export interface CmLesson {
  id: number;
  courseWeekId: number;
  orderIndex: number;
  title: string;
  lessonType: string; // VIDEO, PRACTICE...
  isOptional: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
