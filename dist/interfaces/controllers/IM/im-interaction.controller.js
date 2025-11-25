"use strict";
// controllers/IM/im-interaction.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImInteractionController = void 0;
const VideoInteractionUseCases_1 = require("../../../application/IM/use-cases/video-interactions/VideoInteractionUseCases");
const InteractionTypeUseCases_1 = require("../../../application/IM/use-cases/interaction-types/InteractionTypeUseCases");
const InteractionConfigUseCases_1 = require("../../../application/IM/use-cases/interaction-configs/InteractionConfigUseCases");
const InteractionConfigUseCases_2 = require("../../../application/IM/use-cases/interaction-configs/InteractionConfigUseCases");
class ImInteractionController {
    constructor(listTypesUC = new InteractionTypeUseCases_1.ListInteractionTypesUseCase(), listConfigsUC = new InteractionConfigUseCases_1.ListInteractionConfigsUseCase(), getConfigUC = new InteractionConfigUseCases_2.GetInteractionConfigUseCase(), getTimelineUC = new VideoInteractionUseCases_1.GetVideoTimelineUseCase()) {
        this.listTypesUC = listTypesUC;
        this.listConfigsUC = listConfigsUC;
        this.getConfigUC = getConfigUC;
        this.getTimelineUC = getTimelineUC;
    }
    async listInteractionTypes(req, res) {
        try {
            const { keyword } = req.query;
            const result = await this.listTypesUC.execute({
                keyword: keyword,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listInteractionTypes error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async listInteractionConfigs(req, res) {
        try {
            const { interactionTypeId } = req.query;
            const result = await this.listConfigsUC.execute({
                interactionTypeId: interactionTypeId ? Number(interactionTypeId) : undefined,
            });
            res.json(result);
        }
        catch (err) {
            console.error('listInteractionConfigs error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getInteractionConfig(req, res) {
        try {
            const configId = Number(req.params.configId);
            const result = await this.getConfigUC.execute({ configId });
            if (!result.config) {
                return res.status(404).json({ message: 'Interaction config not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getInteractionConfig error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getVideoTimeline(req, res) {
        try {
            const videoId = Number(req.params.videoId);
            const result = await this.getTimelineUC.execute({ videoId });
            res.json(result);
        }
        catch (err) {
            console.error('getVideoTimeline error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.ImInteractionController = ImInteractionController;
