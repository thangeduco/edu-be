// use-cases/plans/StudyPlanUseCases.ts

import {
  CreateStudyPlanInput,
  CreateStudyPlanOutput,
  GetCurrentStudyPlanInput,
  GetCurrentStudyPlanOutput,
} from '../../dtos/GoalPlanDtos';

// TODO: IStudyPlanRepository, IStudyPlanItemRepository

export class CreateStudyPlanUseCase {
  constructor(
    // private planRepo: IStudyPlanRepository,
  ) {}

  async execute(_input: CreateStudyPlanInput): Promise<CreateStudyPlanOutput> {
    // TODO: insert lm_study_plans + lm_study_plan_items
    return {
      success: true,
      studyPlanId: 1,
      message: 'CreateStudyPlanUseCase not implemented yet',
    };
  }
}

export class GetCurrentStudyPlanUseCase {
  constructor(
    // private planRepo: IStudyPlanRepository,
  ) {}

  async execute(_input: GetCurrentStudyPlanInput): Promise<GetCurrentStudyPlanOutput> {
    // TODO: query lm_study_plans active + items
    return {
      studyPlan: undefined,
      items: [],
    };
  }
}
