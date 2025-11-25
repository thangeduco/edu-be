"use strict";
// use-cases/reports/ReportUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetParentWeeklyReportsUseCase = exports.GetStudentWeeklyReportsUseCase = void 0;
// TODO: IWeeklyReportRepository
class GetStudentWeeklyReportsUseCase {
    constructor(
    // private weeklyReportRepo: IWeeklyReportRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_weekly_reports theo student/course
        return { reports: [] };
    }
}
exports.GetStudentWeeklyReportsUseCase = GetStudentWeeklyReportsUseCase;
class GetParentWeeklyReportsUseCase {
    constructor(
    // private weeklyReportRepo: IWeeklyReportRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_weekly_reports theo parent + student
        return { reports: [] };
    }
}
exports.GetParentWeeklyReportsUseCase = GetParentWeeklyReportsUseCase;
