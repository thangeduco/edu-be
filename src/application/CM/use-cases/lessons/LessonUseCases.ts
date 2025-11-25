// src/application/CM/use-cases/lessons/LessonUseCases.ts

import {
  GetLessonDetailInput,
  GetLessonDetailOutput,
} from '../../dtos/LessonDtos';

// TODO: ILessonRepository

export class GetLessonDetailUseCase {
  constructor(
    // private lessonRepo: ILessonRepository,
  ) {}

  async execute(_input: GetLessonDetailInput): Promise<GetLessonDetailOutput> {
    // TODO: query cm_lessons by id
    return { lesson: undefined };
  }
}
