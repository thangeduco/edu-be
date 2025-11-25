// controllers/LM/lm-goal.controller.ts

import { Request, Response } from 'express';
import {
  CreateGoalUseCase,
  ListGoalsUseCase,
  UpdateGoalUseCase,
} from '../../../application/LM/use-cases/goals/GoalUseCases';

export class LmGoalController {
  constructor(
    private readonly createGoalUC = new CreateGoalUseCase(),
    private readonly listGoalsUC = new ListGoalsUseCase(),
    private readonly updateGoalUC = new UpdateGoalUseCase(),
  ) {}

  async createGoal(req: Request, res: Response) {
    try {
      const result = await this.createGoalUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('createGoal error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listGoals(req: Request, res: Response) {
    try {
      const { studentId, courseId, status } = req.query;
      const result = await this.listGoalsUC.execute({
        studentId: Number(studentId),
        courseId: courseId ? Number(courseId) : undefined,
        status: status as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listGoals error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateGoal(req: Request, res: Response) {
    try {
      const goalId = Number(req.params.goalId);
      const input = { ...req.body, goalId };
      const result = await this.updateGoalUC.execute(input);
      res.json(result);
    } catch (err) {
      console.error('updateGoal error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
