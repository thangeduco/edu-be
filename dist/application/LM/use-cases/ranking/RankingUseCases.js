"use strict";
// use-cases/ranking/RankingUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGroupRankingsUseCase = exports.GetCourseRankingsUseCase = void 0;
// TODO: IRankingRepository (lm_rankings_daily)
class GetCourseRankingsUseCase {
    constructor(
    // private rankingRepo: IRankingRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_rankings_daily with scope_type=COURSE
        return { entries: [] };
    }
}
exports.GetCourseRankingsUseCase = GetCourseRankingsUseCase;
class GetGroupRankingsUseCase {
    constructor(
    // private rankingRepo: IRankingRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_rankings_daily with scope_type=GROUP
        return { entries: [] };
    }
}
exports.GetGroupRankingsUseCase = GetGroupRankingsUseCase;
