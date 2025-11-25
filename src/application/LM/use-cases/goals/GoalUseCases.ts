// use-cases/goals/GoalUseCases.ts

import {
  CreateGoalInput,
  CreateGoalOutput,
  ListGoalsInput,
  ListGoalsOutput,
  UpdateGoalInput,
  UpdateGoalOutput,
} from '../../dtos/GoalPlanDtos';

// TODO: ILearningGoalRepository

export class CreateGoalUseCase {
  constructor(
    // private goalRepo: ILearningGoalRepository,
  ) {}

  async execute(_input: CreateGoalInput): Promise<CreateGoalOutput> {
    // TODO: insert lm_learning_goals
    return {
      success: true,
      goalId: 1,
      message: 'CreateGoalUseCase not implemented yet',
    };
  }
}

export class ListGoalsUseCase {
  constructor(
    // private goalRepo: ILearningGoalRepository,
  ) {}

  async execute(_input: ListGoalsInput): Promise<ListGoalsOutput> {
    // TODO: query lm_learning_goals theo student/course/status
    return { goals: [] };
  }
}

export class UpdateGoalUseCase {
  constructor(
    // private goalRepo: ILearningGoalRepository,
  ) {}

  async execute(_input: UpdateGoalInput): Promise<UpdateGoalOutput> {
    // TODO: update lm_learning_goals
    return {
      success: true,
      message: 'UpdateGoalUseCase not implemented yet',
    };
  }
}
