"use strict";
// controllers/CM/cm-video.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmVideoController = void 0;
const VideoUseCases_1 = require("../../../application/CM/use-cases/videos/VideoUseCases");
class CmVideoController {
    constructor(getLessonVideoUC = new VideoUseCases_1.GetLessonVideoUseCase(), getVideoDetailUC = new VideoUseCases_1.GetVideoDetailUseCase()) {
        this.getLessonVideoUC = getLessonVideoUC;
        this.getVideoDetailUC = getVideoDetailUC;
    }
    async getLessonVideo(req, res) {
        try {
            const lessonId = Number(req.params.lessonId);
            const result = await this.getLessonVideoUC.execute({ lessonId });
            if (!result.video) {
                return res.status(404).json({ message: 'Video not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getLessonVideo error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getVideoDetail(req, res) {
        try {
            const videoId = Number(req.params.videoId);
            const result = await this.getVideoDetailUC.execute({ videoId });
            if (!result.video) {
                return res.status(404).json({ message: 'Video not found' });
            }
            res.json(result);
        }
        catch (err) {
            console.error('getVideoDetail error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.CmVideoController = CmVideoController;
