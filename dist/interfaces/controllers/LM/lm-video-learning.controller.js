"use strict";
// controllers/LM/lm-video-learning.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmVideoLearningController = void 0;
const VideoLearningUseCases_1 = require("../../../application/LM/use-cases/video-learning/VideoLearningUseCases");
class LmVideoLearningController {
    constructor(startSessionUC = new VideoLearningUseCases_1.StartVideoSessionUseCase(), stopSessionUC = new VideoLearningUseCases_1.StopVideoSessionUseCase(), getProgressUC = new VideoLearningUseCases_1.GetVideoProgressUseCase()) {
        this.startSessionUC = startSessionUC;
        this.stopSessionUC = stopSessionUC;
        this.getProgressUC = getProgressUC;
    }
    async startVideoSession(req, res) {
        try {
            const result = await this.startSessionUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('startVideoSession error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async stopVideoSession(req, res) {
        try {
            const result = await this.stopSessionUC.execute(req.body);
            res.json(result);
        }
        catch (err) {
            console.error('stopVideoSession error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getVideoProgress(req, res) {
        try {
            const { studentId, videoId } = req.query;
            const result = await this.getProgressUC.execute({
                studentId: Number(studentId),
                videoId: Number(videoId),
            });
            res.json(result);
        }
        catch (err) {
            console.error('getVideoProgress error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.LmVideoLearningController = LmVideoLearningController;
