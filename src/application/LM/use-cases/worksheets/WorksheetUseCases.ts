// use-cases/worksheets/WorksheetUseCases.ts

import {
  SubmitWorksheetInput,
  SubmitWorksheetOutput,
  GetWorksheetSubmissionInput,
  GetWorksheetSubmissionOutput,
  ListStudentSubmissionsInput,
  ListStudentSubmissionsOutput,
  ListSubmissionsForTeacherInput,
  ListSubmissionsForTeacherOutput,
  GradeWorksheetInput,
  GradeWorksheetOutput,
  ListWorksheetResultsForStudentInput,
  ListWorksheetResultsForStudentOutput,
} from '../../dtos/WorksheetDtos';

// TODO: IWorksheetSubmissionRepository

export class SubmitWorksheetUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(_input: SubmitWorksheetInput): Promise<SubmitWorksheetOutput> {
    // TODO: insert lm_worksheet_submissions
    return {
      success: true,
      submissionId: 1,
      message: 'SubmitWorksheetUseCase not implemented yet',
    };
  }
}

export class GetWorksheetSubmissionUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(_input: GetWorksheetSubmissionInput): Promise<GetWorksheetSubmissionOutput> {
    // TODO: query lm_worksheet_submissions
    return { submission: undefined };
  }
}

export class ListStudentSubmissionsUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(_input: ListStudentSubmissionsInput): Promise<ListStudentSubmissionsOutput> {
    // TODO: query lm_worksheet_submissions by student
    return { submissions: [] };
  }
}

export class ListSubmissionsForTeacherUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(
    _input: ListSubmissionsForTeacherInput,
  ): Promise<ListSubmissionsForTeacherOutput> {
    // TODO: query lm_worksheet_submissions by teacher
    return { submissions: [] };
  }
}

export class GradeWorksheetUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(_input: GradeWorksheetInput): Promise<GradeWorksheetOutput> {
    // TODO: update lm_worksheet_submissions teacher_score/final_score
    return {
      success: true,
      message: 'GradeWorksheetUseCase not implemented yet',
    };
  }
}

export class ListWorksheetResultsForStudentUseCase {
  constructor(
    // private worksheetSubmissionRepo: IWorksheetSubmissionRepository,
  ) {}

  async execute(
    _input: ListWorksheetResultsForStudentInput,
  ): Promise<ListWorksheetResultsForStudentOutput> {
    // TODO: query bảng submissions đã graded
    return { submissions: [] };
  }
}
