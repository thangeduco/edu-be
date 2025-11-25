// dtos/RankingDtos.ts

export interface RankingEntryDto {
  studentId: number;
  studentName?: string;
  rank: number;
  score: number;
}

export interface GetCourseRankingsInput {
  courseId: number;
  date?: string;
}

export interface GetCourseRankingsOutput {
  entries: RankingEntryDto[];
}

export interface GetGroupRankingsInput {
  groupId: number;
  date?: string;
}

export interface GetGroupRankingsOutput {
  entries: RankingEntryDto[];
}
