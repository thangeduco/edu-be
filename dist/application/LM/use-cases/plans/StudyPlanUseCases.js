"use strict";
// use-cases/plans/StudyPlanUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentStudyPlanUseCase = exports.CreateStudyPlanUseCase = void 0;
// TODO: IStudyPlanRepository, IStudyPlanItemRepository
class CreateStudyPlanUseCase {
    constructor(
    // private planRepo: IStudyPlanRepository,
    ) { }
    async execute(_input) {
        // TODO: insert lm_study_plans + lm_study_plan_items
        return {
            success: true,
            studyPlanId: 1,
            message: 'CreateStudyPlanUseCase not implemented yet',
        };
    }
}
exports.CreateStudyPlanUseCase = CreateStudyPlanUseCase;
class GetCurrentStudyPlanUseCase {
    constructor(
    // private planRepo: IStudyPlanRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_study_plans active + items
        return {
            studyPlan: undefined,
            items: [],
        };
    }
}
exports.GetCurrentStudyPlanUseCase = GetCurrentStudyPlanUseCase;
