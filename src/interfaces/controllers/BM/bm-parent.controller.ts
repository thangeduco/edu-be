// controllers/BM/bm-parent.controller.ts
// Skeleton controller cho parent profile & children list

import { Request, Response } from 'express';

export class BmParentController {
  constructor() {}

  async getParentProfile(_req: Request, res: Response) {
    try {
      // TODO: gọi use-case GetParentProfileUseCase
      res.status(501).json({ message: 'getParentProfile not implemented in controller skeleton' });
    } catch (err) {
      console.error('getParentProfile error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateParentProfile(_req: Request, res: Response) {
    try {
      // TODO: gọi use-case UpdateParentProfileUseCase
      res.status(501).json({ message: 'updateParentProfile not implemented in controller skeleton' });
    } catch (err) {
      console.error('updateParentProfile error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async listChildren(_req: Request, res: Response) {
    try {
      // TODO: gọi use-case ListChildrenUseCase
      res.status(501).json({ message: 'listChildren not implemented in controller skeleton' });
    } catch (err) {
      console.error('listChildren error', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
