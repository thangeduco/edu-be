// dtos/GoalPlanDtos.ts

export interface LearningGoalDto {
  id: number;
  studentId: number;
  courseId?: number;
  title: string;
  description?: string;
  targetScore?: number;
  targetDate?: string;
  status: string;
}

export interface CreateGoalInput {
  studentId: number;
  courseId?: number;
  title: string;
  description?: string;
  targetScore?: number;
  targetDate?: string;
}

export interface CreateGoalOutput {
  success: boolean;
  goalId?: number;
  message?: string;
}

export interface ListGoalsInput {
  studentId: number;
  courseId?: number;
  status?: string;
}

export interface ListGoalsOutput {
  goals: LearningGoalDto[];
}

export interface UpdateGoalInput {
  goalId: number;
  title?: string;
  description?: string;
  targetScore?: number;
  targetDate?: string;
  status?: string;
}

export interface UpdateGoalOutput {
  success: boolean;
  message?: string;
}

export interface StudyPlanDto {
  id: number;
  studentId: number;
  courseId: number;
  startDate: string;
  endDate: string;
  status: string;
}

export interface StudyPlanItemDto {
  id: number;
  studyPlanId: number;
  weekNumber: number;
  targetType: string;
  targetId?: number;
  targetDescription?: string;
  dueDate?: string;
  status: string;
}

export interface CreateStudyPlanInput {
  studentId: number;
  courseId: number;
  startDate: string;
  endDate: string;
}

export interface CreateStudyPlanOutput {
  success: boolean;
  studyPlanId?: number;
  message?: string;
}

export interface GetCurrentStudyPlanInput {
  studentId: number;
  courseId: number;
}

export interface GetCurrentStudyPlanOutput {
  studyPlan?: StudyPlanDto;
  items: StudyPlanItemDto[];
}
