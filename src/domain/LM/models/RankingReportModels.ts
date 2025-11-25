// LM/models/RankingReportModels.ts

export interface LmRankingDaily {
  id: number;
  scopeType: string; // COURSE, GROUP
  scopeId: number;
  date: Date;
  studentId: number;
  rank: number;
  score: number;
  createdAt: Date;
}

export interface LmWeeklyReport {
  id: number;
  studentId: number;
  courseId: number;
  weekStartDate: Date;
  weekEndDate: Date;
  summaryJson: any;
  generatedAt: Date;
  sentToParent: boolean;
  parentId?: number;
}
