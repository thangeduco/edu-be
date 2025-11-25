"use strict";
// controllers/IM/im-runtime.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImRuntimeController = void 0;
const RuntimeUseCases_1 = require("../../../application/IM/use-cases/video-interactions/RuntimeUseCases");
class ImRuntimeController {
    constructor(runtimeNextStepUC = new RuntimeUseCases_1.RuntimeNextStepUseCase()) {
        this.runtimeNextStepUC = runtimeNextStepUC;
    }
    async getNextStep(req, res) {
        try {
            const { videoId, currentTimestampSec, currentEventId, studentId, answerContext } = req.body;
            const result = await this.runtimeNextStepUC.execute({
                videoId: Number(videoId),
                currentTimestampSec: Number(currentTimestampSec),
                currentEventId: currentEventId ? Number(currentEventId) : undefined,
                studentId: studentId ? Number(studentId) : undefined,
                answerContext,
            });
            res.json(result);
        }
        catch (err) {
            console.error('getNextStep error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.ImRuntimeController = ImRuntimeController;
