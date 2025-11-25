// src/application/CM/use-cases/worksheets/WorksheetUseCases.ts

import {
  GetWeekWorksheetsInput,
  GetWeekWorksheetsOutput,
  GetWorksheetDetailInput,
  GetWorksheetDetailOutput,
} from '../../dtos/WorksheetDtos';

// TODO: IWorksheetRepository

export class GetWeekWorksheetsUseCase {
  constructor(
    // private worksheetRepo: IWorksheetRepository,
  ) {}

  async execute(_input: GetWeekWorksheetsInput): Promise<GetWeekWorksheetsOutput> {
    // TODO: query cm_worksheets join cm_lessons join cm_course_weeks
    return { worksheets: [] };
  }
}

export class GetWorksheetDetailUseCase {
  constructor(
    // private worksheetRepo: IWorksheetRepository,
  ) {}

  async execute(_input: GetWorksheetDetailInput): Promise<GetWorksheetDetailOutput> {
    // TODO: query cm_worksheets by id
    return { worksheet: undefined };
  }
}
