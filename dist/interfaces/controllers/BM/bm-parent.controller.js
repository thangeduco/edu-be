"use strict";
// controllers/BM/bm-parent.controller.ts
// Skeleton controller cho parent profile & children list
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmParentController = void 0;
class BmParentController {
    constructor() { }
    async getParentProfile(_req, res) {
        try {
            // TODO: gọi use-case GetParentProfileUseCase
            res.status(501).json({ message: 'getParentProfile not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('getParentProfile error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async updateParentProfile(_req, res) {
        try {
            // TODO: gọi use-case UpdateParentProfileUseCase
            res.status(501).json({ message: 'updateParentProfile not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('updateParentProfile error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listChildren(_req, res) {
        try {
            // TODO: gọi use-case ListChildrenUseCase
            res.status(501).json({ message: 'listChildren not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('listChildren error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.BmParentController = BmParentController;
