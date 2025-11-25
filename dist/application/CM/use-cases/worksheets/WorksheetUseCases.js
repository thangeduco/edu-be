"use strict";
// src/application/CM/use-cases/worksheets/WorksheetUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorksheetDetailUseCase = exports.GetWeekWorksheetsUseCase = void 0;
// TODO: IWorksheetRepository
class GetWeekWorksheetsUseCase {
    constructor(
    // private worksheetRepo: IWorksheetRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_worksheets join cm_lessons join cm_course_weeks
        return { worksheets: [] };
    }
}
exports.GetWeekWorksheetsUseCase = GetWeekWorksheetsUseCase;
class GetWorksheetDetailUseCase {
    constructor(
    // private worksheetRepo: IWorksheetRepository,
    ) { }
    async execute(_input) {
        // TODO: query cm_worksheets by id
        return { worksheet: undefined };
    }
}
exports.GetWorksheetDetailUseCase = GetWorksheetDetailUseCase;
