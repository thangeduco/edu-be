// use-cases/badges/BadgeUseCases.ts

import {
  AwardBadgeInput,
  AwardBadgeOutput,
} from '../../dtos/BadgeDtos';

// TODO: IBadgeRepository, IStudentBadgeRepository

export class AwardBadgeUseCase {
  constructor(
    // private badgeRepo: IBadgeRepository,
    // private studentBadgeRepo: IStudentBadgeRepository,
  ) {}

  async execute(_input: AwardBadgeInput): Promise<AwardBadgeOutput> {
    // TODO: kiểm tra điều kiện, insert lm_student_badges
    return {
      success: true,
      studentBadgeId: 1,
      message: 'AwardBadgeUseCase not implemented yet',
    };
  }
}
