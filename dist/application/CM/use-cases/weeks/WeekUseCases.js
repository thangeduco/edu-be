"use strict";
// src/application/CM/use-cases/weeks/WeekUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWeekLessonsUseCase = exports.GetWeekDetailUseCase = void 0;
// TODO: ICourseWeekRepository, ILessonRepository
class GetWeekDetailUseCase {
    constructor(
    // private weekRepo: ICourseWeekRepository,
    ) { }
    async execute(_input) {
        // TODO: lấy chi tiết cm_course_weeks
        return { week: undefined };
    }
}
exports.GetWeekDetailUseCase = GetWeekDetailUseCase;
class GetWeekLessonsUseCase {
    constructor(
    // private lessonRepo: ILessonRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_lessons theo course_week_id
        return { lessons: [] };
    }
}
exports.GetWeekLessonsUseCase = GetWeekLessonsUseCase;
