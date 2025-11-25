// src/application/CM/dtos/WorksheetDtos.ts

export interface WorksheetSummaryDto {
  id: number;
  lessonId: number;
  title: string;
  type: string; // ONLINE / OFFLINE / ...
  maxScore?: number;
  estimatedMinutes?: number;
}

export interface GetWeekWorksheetsInput {
  weekId: number;
}

export interface GetWeekWorksheetsOutput {
  worksheets: WorksheetSummaryDto[];
}

export interface GetWorksheetDetailInput {
  worksheetId: number;
}

export interface WorksheetDetailDto extends WorksheetSummaryDto {
  description?: string;
  fileUrl?: string;
  dueDaysOffset?: number;
}

export interface GetWorksheetDetailOutput {
  worksheet?: WorksheetDetailDto;
}
