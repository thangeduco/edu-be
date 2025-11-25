"use strict";
// controllers/IM/im-gamification.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImGamificationController = void 0;
const GamificationUseCases_1 = require("../../../application/IM/use-cases/gamification/GamificationUseCases");
class ImGamificationController {
    constructor(listAnimationsUC = new GamificationUseCases_1.ListAnimationsUseCase(), listSoundsUC = new GamificationUseCases_1.ListSoundsUseCase(), listBadgePresetsUC = new GamificationUseCases_1.ListBadgePresetsUseCase()) {
        this.listAnimationsUC = listAnimationsUC;
        this.listSoundsUC = listSoundsUC;
        this.listBadgePresetsUC = listBadgePresetsUC;
    }
    async listAnimations(req, res) {
        try {
            const { keyword } = req.query;
            const result = await this.listAnimationsUC.execute({
                keyword: keyword,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listAnimations error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listSounds(req, res) {
        try {
            const { keyword } = req.query;
            const result = await this.listSoundsUC.execute({
                keyword: keyword,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listSounds error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listBadgePresets(req, res) {
        try {
            const { keyword } = req.query;
            const result = await this.listBadgePresetsUC.execute({
                keyword: keyword,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listBadgePresets error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.ImGamificationController = ImGamificationController;
