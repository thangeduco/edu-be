"use strict";
// controllers/LM/lm-badge.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmBadgeController = void 0;
const BadgeUseCases_1 = require("../../../application/LM/use-cases/badges/BadgeUseCases");
class LmBadgeController {
    constructor(awardBadgeUC = new BadgeUseCases_1.AwardBadgeUseCase()) {
        this.awardBadgeUC = awardBadgeUC;
    }
    async awardBadge(req, res) {
        try {
            const result = await this.awardBadgeUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('awardBadge error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmBadgeController = LmBadgeController;
