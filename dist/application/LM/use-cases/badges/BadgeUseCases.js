"use strict";
// use-cases/badges/BadgeUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardBadgeUseCase = void 0;
// TODO: IBadgeRepository, IStudentBadgeRepository
class AwardBadgeUseCase {
    constructor(
    // private badgeRepo: IBadgeRepository,
    // private studentBadgeRepo: IStudentBadgeRepository,
    ) { }
    async execute(_input) {
        // TODO: kiểm tra điều kiện, insert lm_student_badges
        return {
            success: true,
            studentBadgeId: 1,
            message: 'AwardBadgeUseCase not implemented yet',
        };
    }
}
exports.AwardBadgeUseCase = AwardBadgeUseCase;
