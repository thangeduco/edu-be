"use strict";
// controllers/CM/cm-worksheet.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmWorksheetController = void 0;
const WorksheetUseCases_1 = require("../../../application/CM/use-cases/worksheets/WorksheetUseCases");
class CmWorksheetController {
    constructor(getWeekWorksheetsUC = new WorksheetUseCases_1.GetWeekWorksheetsUseCase(), getWorksheetDetailUC = new WorksheetUseCases_1.GetWorksheetDetailUseCase()) {
        this.getWeekWorksheetsUC = getWeekWorksheetsUC;
        this.getWorksheetDetailUC = getWorksheetDetailUC;
    }
    async getWeekWorksheets(req, res) {
        try {
            const weekId = Number(req.params.weekId);
            const result = await this.getWeekWorksheetsUC.execute({ weekId });
            res.json(result);
        }
        catch (err) {
            console.error('getWeekWorksheets error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getWorksheetDetail(req, res) {
        try {
            const worksheetId = Number(req.params.worksheetId);
            const result = await this.getWorksheetDetailUC.execute({ worksheetId });
            if (!result.worksheet) {
                return res.status(404).json({ message: 'Worksheet not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getWorksheetDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmWorksheetController = CmWorksheetController;
