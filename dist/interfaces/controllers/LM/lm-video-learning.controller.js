"use strict";
// src/interfaces/controllers/LM/lm-video-learning.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.lmVideoLearningController = void 0;
const VideoLearningUseCases_1 = require("../../../application/LM/use-cases/video-learning/VideoLearningUseCases");
const pg_lm_video_learning_repository_1 = require("../../../infrastructure/LM/pg-lm-video-learning.repository");
// Khởi tạo repo & usecase đúng chuẩn kiến trúc
const videoSessionRepo = new pg_lm_video_learning_repository_1.PgVideoSessionRepository();
const videoLearningUC = new VideoLearningUseCases_1.VideoLearningUseCases(videoSessionRepo);
/**
 * LmVideoLearningController
 * Quản lý các API liên quan tới việc học sinh xem video bài giảng:
 *  - POST /api/lm/video-sessions/start
 *  - POST /api/lm/video-sessions/stop
 */
exports.lmVideoLearningController = {
    /**
     * Học sinh bắt đầu xem video bài giảng.
     * POST /api/lm/video-sessions/start
     * body:
     *  - studentId: number
     *  - videoId: number
     *  - startSecond: number
     *  - startedAt?: string (ISO)
     *  - deviceType?: string
     */
    async startVideoSession(req, res) {
        const { studentId, videoId, startSecond, startedAt, deviceType, } = req.body || {};
        console.info(`[lmVideoLearningController][startVideoSession] studentId=${studentId}, videoId=${videoId}, startSecond=${startSecond}, deviceType=${deviceType}`);
        // Validate input cơ bản
        if (typeof studentId !== 'number' ||
            typeof videoId !== 'number' ||
            typeof startSecond !== 'number') {
            return res.status(400).json({
                error: 'studentId, videoId, startSecond phải là số và không được bỏ trống',
            });
        }
        try {
            const result = await videoLearningUC.startVideoSession({
                studentId,
                videoId,
                startSecond,
                startedAt,
                deviceType,
            });
            // Use case đã handle success=false && message
            if (!result.success) {
                return res.status(500).json(result);
            }
            return res.status(200).json(result);
        }
        catch (err) {
            console.error('[lmVideoLearningController][startVideoSession] ❌ Error', err);
            return res.status(500).json({
                error: err?.message || 'Internal server error',
            });
        }
    },
    /**
     * Học sinh kết thúc xem video bài giảng.
     * POST /api/lm/video-sessions/stop
     * body:
     *  - sessionId: number
     *  - stopSecond: number
     */
    async stopVideoSession(req, res) {
        const { sessionId, stopSecond } = req.body || {};
        console.info(`[lmVideoLearningController][stopVideoSession] sessionId=${sessionId}, stopSecond=${stopSecond}`);
        if (typeof sessionId !== 'number' ||
            typeof stopSecond !== 'number') {
            return res.status(400).json({
                error: 'sessionId và stopSecond phải là số và không được bỏ trống',
            });
        }
        try {
            const result = await videoLearningUC.stopVideoSession({
                sessionId,
                stopSecond,
            });
            if (!result.success) {
                return res.status(500).json(result);
            }
            return res.status(200).json(result);
        }
        catch (err) {
            console.error('[lmVideoLearningController][stopVideoSession] ❌ Error', err);
            return res.status(500).json({
                error: err?.message || 'Internal server error',
            });
        }
    },
    // Nếu sau này bạn implement GetVideoProgressUseCase trong VideoLearningUseCases,
    // có thể bổ sung handler ở đây tương tự bmProductController.
};
