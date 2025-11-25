"use strict";
// use-cases/progress/ProgressUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetParentChildrenSummaryUseCase = exports.GetParentChildCourseProgressUseCase = exports.GetStudentDashboardUseCase = exports.GetStudentCourseWeeksProgressUseCase = exports.GetStudentCourseProgressUseCase = void 0;
// TODO: ICourseProgressRepository, IWeekProgressRepository, Dashboard aggregators
class GetStudentCourseProgressUseCase {
    constructor(
    // private courseProgressRepo: ICourseProgressRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_student_course_progress
        return { progress: undefined };
    }
}
exports.GetStudentCourseProgressUseCase = GetStudentCourseProgressUseCase;
class GetStudentCourseWeeksProgressUseCase {
    constructor(
    // private weekProgressRepo: IWeekProgressRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_week_progress + join tuần
        return { weeks: [] };
    }
}
exports.GetStudentCourseWeeksProgressUseCase = GetStudentCourseWeeksProgressUseCase;
class GetStudentDashboardUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: tổng hợp progress, worksheet gần đây, video gần đây, badges
        return {
            dashboard: {
                studentId: _input.studentId,
                courseId: _input.courseId,
                courseProgress: undefined,
                recentWorksheets: [],
                recentVideos: [],
                badges: [],
            },
        };
    }
}
exports.GetStudentDashboardUseCase = GetStudentDashboardUseCase;
class GetParentChildCourseProgressUseCase {
    constructor(
    // private courseProgressRepo: ICourseProgressRepository,
    ) { }
    async execute(_input) {
        // TODO: verify parent-child link + trả progress của child
        return { progress: undefined };
    }
}
exports.GetParentChildCourseProgressUseCase = GetParentChildCourseProgressUseCase;
class GetParentChildrenSummaryUseCase {
    constructor() { }
    async execute(_input) {
        // TODO: aggregate progress theo từng con
        return { children: [] };
    }
}
exports.GetParentChildrenSummaryUseCase = GetParentChildrenSummaryUseCase;
