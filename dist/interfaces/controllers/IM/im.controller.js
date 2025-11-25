"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imController = exports.ImController = void 0;
class ImController {
    // Interaction types/configs
    async listInteractionTypes(req, res) {
        res.json({ message: 'listInteractionTypes not implemented yet' });
    }
    async listInteractionConfigs(req, res) {
        res.json({ message: 'listInteractionConfigs not implemented yet' });
    }
    async getInteractionConfig(req, res) {
        res.json({ message: 'getInteractionConfig not implemented yet' });
    }
    // Video interactions timeline
    async getVideoTimeline(req, res) {
        res.json({ message: 'getVideoTimeline not implemented yet' });
    }
    // Gamification assets
    async listAnimations(req, res) {
        res.json({ message: 'listAnimations not implemented yet' });
    }
    async listSounds(req, res) {
        res.json({ message: 'listSounds not implemented yet' });
    }
    async listBadgePresets(req, res) {
        res.json({ message: 'listBadgePresets not implemented yet' });
    }
    // Runtime support
    async getRuntimeNextStep(req, res) {
        res.json({ message: 'getRuntimeNextStep not implemented yet' });
    }
}
exports.ImController = ImController;
exports.imController = new ImController();
