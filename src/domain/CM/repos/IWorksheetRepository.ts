// CM/repos/IWorksheetRepository.ts

import { CmWorksheet } from '../models/WorksheetModels';

export interface IWorksheetRepository {
  listByWeekId(weekId: number): Promise<CmWorksheet[]>;
  findById(id: number): Promise<CmWorksheet | null>;
}
