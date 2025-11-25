// CM/models/WorksheetModels.ts

export interface CmWorksheet {
  id: number;
  lessonId: number;
  title: string;
  type: string; // ONLINE, OFFLINE
  maxScore?: number;
  estimatedMinutes?: number;
  description?: string;
  fileUrl?: string;
  dueDaysOffset?: number;
  createdAt: Date;
  updatedAt: Date;
}
