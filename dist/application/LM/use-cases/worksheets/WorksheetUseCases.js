"use strict";
// use-cases/worksheets/WorksheetUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorksheetResultsForStudentUseCase = exports.GradeWorksheetUseCase = exports.ListSubmissionsForTeacherUseCase = exports.ListStudentSubmissionsUseCase = exports.GetWorksheetSubmissionUseCase = exports.SubmitWorksheetUseCase = void 0;
// TODO: IWorksheetSubmissionRepository
class SubmitWorksheetUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: insert lm_worksheet_submissions
        return {
            success: true,
            submissionId: 1,
            message: 'SubmitWorksheetUseCase not implemented yet',
        };
    }
}
exports.SubmitWorksheetUseCase = SubmitWorksheetUseCase;
class GetWorksheetSubmissionUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_worksheet_submissions
        return { submission: undefined };
    }
}
exports.GetWorksheetSubmissionUseCase = GetWorksheetSubmissionUseCase;
class ListStudentSubmissionsUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_worksheet_submissions by student
        return { submissions: [] };
    }
}
exports.ListStudentSubmissionsUseCase = ListStudentSubmissionsUseCase;
class ListSubmissionsForTeacherUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: query lm_worksheet_submissions by teacher
        return { submissions: [] };
    }
}
exports.ListSubmissionsForTeacherUseCase = ListSubmissionsForTeacherUseCase;
class GradeWorksheetUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: update lm_worksheet_submissions teacher_score/final_score
        return {
            success: true,
            message: 'GradeWorksheetUseCase not implemented yet',
        };
    }
}
exports.GradeWorksheetUseCase = GradeWorksheetUseCase;
class ListWorksheetResultsForStudentUseCase {
    constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
    ) { }
    async execute(_input) {
        // TODO: query bảng submissions đã graded
        return { submissions: [] };
    }
}
exports.ListWorksheetResultsForStudentUseCase = ListWorksheetResultsForStudentUseCase;
