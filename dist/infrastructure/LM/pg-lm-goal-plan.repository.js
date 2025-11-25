"use strict";
// LM/pg-lm-goal-plan.repository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgStudyPlanItemRepository = exports.PgStudyPlanRepository = exports.PgLearningGoalRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgLearningGoalRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createGoal(goal) {
        // TODO: INSERT INTO lm_learning_goals ...
        throw new Error('Method not implemented.');
    }
    async updateGoal(_goal) {
        // TODO: UPDATE lm_learning_goals ...
        throw new Error('Method not implemented.');
    }
    async listGoals(_filter) {
        // TODO: SELECT ... FROM lm_learning_goals WHERE ...
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        // TODO: SELECT ... FROM lm_learning_goals WHERE id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgLearningGoalRepository = PgLearningGoalRepository;
class PgStudyPlanRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async createPlan(plan) {
        // TODO: INSERT INTO lm_study_plans ...
        throw new Error('Method not implemented.');
    }
    async getCurrentPlan(studentId, courseId) {
        // TODO: SELECT ... FROM lm_study_plans WHERE ...
        throw new Error('Method not implemented.');
    }
}
exports.PgStudyPlanRepository = PgStudyPlanRepository;
class PgStudyPlanItemRepository {
    constructor(pool = pgClient_1.pgPool) {
        this.pool = pool;
    }
    async listItems(_planId) {
        // TODO: SELECT ... FROM lm_study_plan_items WHERE study_plan_id = $1
        throw new Error('Method not implemented.');
    }
}
exports.PgStudyPlanItemRepository = PgStudyPlanItemRepository;
