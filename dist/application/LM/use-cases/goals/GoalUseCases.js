"use strict";
// use-cases/goals/GoalUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGoalUseCase = exports.ListGoalsUseCase = exports.CreateGoalUseCase = void 0;
// TODO: ILearningGoalRepository
class CreateGoalUseCase {
    constructor(
    // private goalRepo: ILearningGoalRepository,
    ) { }
    async execute(_input) {
        // TODO: insert lm_learning_goals
        return {
            success: true,
            goalId: 1,
            message: 'CreateGoalUseCase not implemented yet',
        };
    }
}
exports.CreateGoalUseCase = CreateGoalUseCase;
class ListGoalsUseCase {
    constructor(
    // private goalRepo: ILearningGoalRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_learning_goals theo student/course/status
        return { goals: [] };
    }
}
exports.ListGoalsUseCase = ListGoalsUseCase;
class UpdateGoalUseCase {
    constructor(
    // private goalRepo: ILearningGoalRepository,
    ) { }
    async execute(_input) {
        // TODO: update lm_learning_goals
        return {
            success: true,
            message: 'UpdateGoalUseCase not implemented yet',
        };
    }
}
exports.UpdateGoalUseCase = UpdateGoalUseCase;
