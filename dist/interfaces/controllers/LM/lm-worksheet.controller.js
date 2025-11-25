"use strict";
// controllers/LM/lm-worksheet.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmWorksheetController = void 0;
const WorksheetUseCases_1 = require("../../../application/LM/use-cases/worksheets/WorksheetUseCases");
class LmWorksheetController {
    constructor(submitWorksheetUC = new WorksheetUseCases_1.SubmitWorksheetUseCase(), getSubmissionUC = new WorksheetUseCases_1.GetWorksheetSubmissionUseCase(), listStudentSubmissionsUC = new WorksheetUseCases_1.ListStudentSubmissionsUseCase(), listTeacherSubmissionsUC = new WorksheetUseCases_1.ListSubmissionsForTeacherUseCase(), gradeWorksheetUC = new WorksheetUseCases_1.GradeWorksheetUseCase(), listResultsForStudentUC = new WorksheetUseCases_1.ListWorksheetResultsForStudentUseCase()) {
        this.submitWorksheetUC = submitWorksheetUC;
        this.getSubmissionUC = getSubmissionUC;
        this.listStudentSubmissionsUC = listStudentSubmissionsUC;
        this.listTeacherSubmissionsUC = listTeacherSubmissionsUC;
        this.gradeWorksheetUC = gradeWorksheetUC;
        this.listResultsForStudentUC = listResultsForStudentUC;
    }
    async submitWorksheet(req, res) {
        try {
            const result = await this.submitWorksheetUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('submitWorksheet error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getWorksheetSubmission(req, res) {
        try {
            const worksheetId = Number(req.params.worksheetId);
            const submissionId = Number(req.params.submissionId);
            const result = await this.getSubmissionUC.execute({ worksheetId, submissionId });
            if (!result.submission) {
                return res.status(404).json({ message: 'Submission not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getWorksheetSubmission error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listStudentSubmissions(req, res) {
        try {
            const { studentId, worksheetId } = req.query;
            const result = await this.listStudentSubmissionsUC.execute({
                studentId: Number(studentId),
                worksheetId: worksheetId ? Number(worksheetId) : undefined,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listStudentSubmissions error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listSubmissionsForTeacher(req, res) {
        try {
            const { teacherId, status } = req.query;
            const result = await this.listTeacherSubmissionsUC.execute({
                teacherId: Number(teacherId),
                status: status,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listSubmissionsForTeacher error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async gradeWorksheet(req, res) {
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
        }
        catch (err) {
            console.error('gradeWorksheet error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listResultsForStudent(req, res) {
        try {
            const { studentId } = req.query;
            const result = await this.listResultsForStudentUC.execute({
                studentId: Number(studentId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('listResultsForStudent error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmWorksheetController = LmWorksheetController;
