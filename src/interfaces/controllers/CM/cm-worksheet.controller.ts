// controllers/CM/cm-worksheet.controller.ts

import { Request, Response } from 'express';
import {
  GetWeekWorksheetsUseCase,
  GetWorksheetDetailUseCase,
} from '../../../application/CM/use-cases/worksheets/WorksheetUseCases';

export class CmWorksheetController {
  constructor(
    private readonly getWeekWorksheetsUC = new GetWeekWorksheetsUseCase(),
    private readonly getWorksheetDetailUC = new GetWorksheetDetailUseCase(),
  ) {}

  async getWeekWorksheets(req: Request, res: Response) {
    try {
      const weekId = Number(req.params.weekId);
      const result = await this.getWeekWorksheetsUC.execute({ weekId });
      res.json(result);
    } catch (err) {
      console.error('getWeekWorksheets error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getWorksheetDetail(req: Request, res: Response) {
    try {
      const worksheetId = Number(req.params.worksheetId);
      const result = await this.getWorksheetDetailUC.execute({ worksheetId });
      if (!result.worksheet) {
        return res.status(404).json({ message: 'Worksheet not found' });
      }
      res.json(result);
    } catch (err) {
      console.error('getWorksheetDetail error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
