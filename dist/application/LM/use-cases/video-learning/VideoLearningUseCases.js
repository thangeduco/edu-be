"use strict";
// src/application/LM/use-cases/video-learning/VideoLearningUseCases.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoLearningUseCases = void 0;
/**
 * Use cases liên quan tới việc học sinh xem video bài giảng:
 * 1. Bắt đầu xem video
 * 2. Kết thúc xem video
 */
class VideoLearningUseCases {
    constructor(sessionRepo) {
        this.sessionRepo = sessionRepo;
    }
    /**
     * Use Case 1: Học sinh bắt đầu xem video bài giảng.
     * - Tạo một lm_video_sessions mới bằng createSession
     */
    async startVideoSession(input) {
        console.info(`[startVideoSession] HS ${input.studentId} bắt đầu xem video ${input.videoId}`);
        try {
            const newSession = {
                student_id: input.studentId,
                video_id: input.videoId,
                started_at: null, // 🔥 không dùng nữa, DB fill
                ended_at: null,
                start_second: input.startSecond,
                stop_second: null,
                device_type: input.deviceType ?? null
            };
            const created = await this.sessionRepo.createSession(newSession);
            return { success: true, sessionId: created.id };
        }
        catch (err) {
            console.error(`[startVideoSession] ❌`, err);
            return {
                success: false,
                message: 'Không thể tạo phiên xem video.'
            };
        }
    }
    /**
     * Use Case 2: Học sinh kết thúc xem video bài giảng.
     * - Repo sẽ set ended_at = NOW() trong DB
     * - Chỉ cần truyền sessionId + stopSecond
     */
    async stopVideoSession(input) {
        console.info(`[VideoLearningUseCases][stopVideoSession] 🛑 Kết thúc session ${input.sessionId} tại giây ${input.stopSecond}`);
        try {
            const updatePayload = {
                id: input.sessionId,
                stop_second: input.stopSecond,
                // ended_at không cần truyền, DB sẽ tự NOW()
            };
            await this.sessionRepo.updateSession(updatePayload);
            console.info(`[VideoLearningUseCases][stopVideoSession] ✅ Cập nhật phiên xem video thành công, sessionId = ${input.sessionId}`);
            return {
                success: true,
                message: "Đã ghi nhận kết thúc phiên xem video.",
            };
        }
        catch (err) {
            console.error(`[VideoLearningUseCases][stopVideoSession] ❌ Lỗi khi cập nhật phiên xem video`, { error: err, input });
            return {
                success: false,
                message: "Không thể ghi nhận kết thúc phiên xem video. Vui lòng thử lại sau.",
            };
        }
    }
}
exports.VideoLearningUseCases = VideoLearningUseCases;
