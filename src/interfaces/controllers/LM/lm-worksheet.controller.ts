// controllers/LM/lm-worksheet.controller.ts

import { Request, Response } from 'express';
import {
  SubmitWorksheetUseCase,
  GetWorksheetSubmissionUseCase,
  ListStudentSubmissionsUseCase,
  ListSubmissionsForTeacherUseCase,
  GradeWorksheetUseCase,
  ListWorksheetResultsForStudentUseCase,
} from '../../../application/LM/use-cases/worksheets/WorksheetUseCases';

export class LmWorksheetController {
  constructor(
    private readonly submitWorksheetUC = new SubmitWorksheetUseCase(),
    private readonly getSubmissionUC = new GetWorksheetSubmissionUseCase(),
    private readonly listStudentSubmissionsUC = new ListStudentSubmissionsUseCase(),
    private readonly listTeacherSubmissionsUC = new ListSubmissionsForTeacherUseCase(),
    private readonly gradeWorksheetUC = new GradeWorksheetUseCase(),
    private readonly listResultsForStudentUC = new ListWorksheetResultsForStudentUseCase(),
  ) {}

  async submitWorksheet(req: Request, res: Response) {
    try {
      const result = await this.submitWorksheetUC.execute(req.body);
      res.json(result);
    } catch (err) {
      console.error('submitWorksheet error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getWorksheetSubmission(req: Request, res: Response) {
    try {
      const worksheetId = Number(req.params.worksheetId);
      const submissionId = Number(req.params.submissionId);
      const result = await this.getSubmissionUC.execute({ worksheetId, submissionId });
      if (!result.submission) {
        return res.status(404).json({ message: 'Submission not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getWorksheetSubmission error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listStudentSubmissions(req: Request, res: Response) {
    try {
      const { studentId, worksheetId } = req.query;
      const result = await this.listStudentSubmissionsUC.execute({
        studentId: Number(studentId),
        worksheetId: worksheetId ? Number(worksheetId) : undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listStudentSubmissions error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listSubmissionsForTeacher(req: Request, res: Response) {
    try {
      const { teacherId, status } = req.query;
      const result = await this.listTeacherSubmissionsUC.execute({
        teacherId: Number(teacherId),
        status: status as string | undefined,
      });
      res.json(result);
    } catch (err) {
      console.error('listSubmissionsForTeacher error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async gradeWorksheet(req: Request, res: Response) {
    try {
      const worksheetId = Number(req.params.worksheetId);
      const submissionId = Number(req.params.submissionId);
      const { teacherId, teacherScore, finalScore, teacherFeedback } = req.body;
      const result = await this.gradeWorksheetUC.execute({
        teacherId,
        worksheetId,
        submissionId,
        teacherScore,
        finalScore,
        teacherFeedback,
      });
      res.json(result);
    } catch (err) {
      console.error('gradeWorksheet error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listResultsForStudent(req: Request, res: Response) {
    try {
      const { studentId } = req.query;
      const result = await this.listResultsForStudentUC.execute({
        studentId: Number(studentId),
      });
      res.json(result);
    } catch (err) {
      console.error('listResultsForStudent error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
