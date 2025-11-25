// use-cases/ranking/RankingUseCases.ts

import {
  GetCourseRankingsInput,
  GetCourseRankingsOutput,
  GetGroupRankingsInput,
  GetGroupRankingsOutput,
} from '../../dtos/RankingDtos';

// TODO: IRankingRepository (lm_rankings_daily)

export class GetCourseRankingsUseCase {
  constructor(
    // private rankingRepo: IRankingRepository,
  ) {}

  async execute(_input: GetCourseRankingsInput): Promise<GetCourseRankingsOutput> {
    // TODO: query lm_rankings_daily with scope_type=COURSE
    return { entries: [] };
  }
}

export class GetGroupRankingsUseCase {
  constructor(
    // private rankingRepo: IRankingRepository,
  ) {}

  async execute(_input: GetGroupRankingsInput): Promise<GetGroupRankingsOutput> {
    // TODO: query lm_rankings_daily with scope_type=GROUP
    return { entries: [] };
  }
}
