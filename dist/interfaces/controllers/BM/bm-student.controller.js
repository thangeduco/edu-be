"use strict";
// controllers/BM/bm-student.controller.ts
// Skeleton controller cho student profile
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmStudentController = void 0;
class BmStudentController {
    constructor() { }
    async getStudentProfile(_req, res) {
        try {
            // TODO: gọi use-case GetStudentProfileUseCase
            res.status(501).json({ message: 'getStudentProfile not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('getStudentProfile error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.BmStudentController = BmStudentController;
