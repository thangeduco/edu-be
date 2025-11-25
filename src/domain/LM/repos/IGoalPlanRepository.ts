// LM/repos/IGoalPlanRepository.ts

import {
  LmLearningGoal,
  LmStudyPlan,
  LmStudyPlanItem,
} from '../models/GoalPlanModels';

export interface ILearningGoalRepository {
  createGoal(goal: Omit<LmLearningGoal, 'id' | 'createdAt' | 'updatedAt'>): Promise<LmLearningGoal>;
  updateGoal(goal: LmLearningGoal): Promise<void>;
  listGoals(filter: { studentId: number; courseId?: number; status?: string }): Promise<LmLearningGoal[]>;
  findById(id: number): Promise<LmLearningGoal | null>;
}

export interface IStudyPlanRepository {
  createPlan(plan: Omit<LmStudyPlan, 'id' | 'createdAt' | 'updatedAt'>): Promise<LmStudyPlan>;
  getCurrentPlan(studentId: number, courseId: number): Promise<LmStudyPlan | null>;
}

export interface IStudyPlanItemRepository {
  listItems(planId: number): Promise<LmStudyPlanItem[]>;
}
