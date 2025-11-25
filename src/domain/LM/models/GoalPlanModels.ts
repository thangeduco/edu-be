// LM/models/GoalPlanModels.ts

export interface LmLearningGoal {
  id: number;
  studentId: number;
  courseId?: number;
  title: string;
  description?: string;
  targetScore?: number;
  targetDate?: Date;
  status: string; // ACTIVE, COMPLETED, DROPPED...
  createdAt: Date;
  updatedAt: Date;
}

export interface LmStudyPlan {
  id: number;
  studentId: number;
  courseId: number;
  startDate: Date;
  endDate: Date;
  status: string; // ACTIVE, FINISHED...
  createdAt: Date;
  updatedAt: Date;
}

export interface LmStudyPlanItem {
  id: number;
  studyPlanId: number;
  weekNumber: number;
  targetType: string; // VIDEO, WORKSHEET...
  targetId?: number;
  targetDescription?: string;
  dueDate?: Date;
  status: string; // PLANNED, DONE, MISSED...
  createdAt: Date;
  updatedAt: Date;
}
