"use strict";
// src/application/CM/use-cases/courses/CourseUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourseWeeksUseCase = exports.GetCourseDetailUseCase = exports.ListCoursesUseCase = void 0;
// TODO: import các repo interface khi anh tạo domain
// import { ICourseRepository } from '../../../domain/CM/repos/ICourseRepository';
// import { ICourseWeekRepository } from '../../../domain/CM/repos/ICourseWeekRepository';
class ListCoursesUseCase {
    constructor(
    // private courseRepo: ICourseRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_courses theo grade/level/status
        return { courses: [] };
    }
}
exports.ListCoursesUseCase = ListCoursesUseCase;
class GetCourseDetailUseCase {
    constructor(
    // private courseRepo: ICourseRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_courses by id
        return { course: undefined };
    }
}
exports.GetCourseDetailUseCase = GetCourseDetailUseCase;
class GetCourseWeeksUseCase {
    constructor(
    // private weekRepo: ICourseWeekRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_course_weeks theo courseId
        return { weeks: [] };
    }
}
exports.GetCourseWeeksUseCase = GetCourseWeeksUseCase;
