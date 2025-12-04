// src/application/LM/use-cases/video-learning/VideoLearningUseCases.ts

import { IVideoSessionRepo } from "../../../../domain/LM/repos";
import {
    StartVideoSessionInput,
    StartVideoSessionOutput,
    StopVideoSessionInput,
    StopVideoSessionOutput,
} from "../../dtos/VideoLearningDtos";
import { LmVideoSession } from "../../../../domain/LM/models/VideoLearningModels";

/**
 * Use cases liên quan tới việc học sinh xem video bài giảng:
 * 1. Bắt đầu xem video
 * 2. Kết thúc xem video
 */
export class VideoLearningUseCases {
    constructor(private readonly sessionRepo: IVideoSessionRepo) { }

    /**
     * Use Case 1: Học sinh bắt đầu xem video bài giảng.
     * - Tạo một lm_video_sessions mới bằng createSession
     */
    async startVideoSession(
        input: StartVideoSessionInput
    ): Promise<StartVideoSessionOutput> {
        console.info(`[startVideoSession] HS ${input.studentId} bắt đầu xem video ${input.videoId}`);

        try {
            const newSession: Omit<LmVideoSession, 'id'> = {
                student_id: input.studentId,
                video_id: input.videoId,
                started_at: null as any,   // 🔥 không dùng nữa, DB fill
                ended_at: null,
                start_second: input.startSecond,
                stop_second: null,
                device_type: input.deviceType ?? null
            };

            const created = await this.sessionRepo.createSession(newSession);

            return { success: true, sessionId: created.id };
        } catch (err) {
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
    async stopVideoSession(
        input: StopVideoSessionInput
    ): Promise<StopVideoSessionOutput> {
        console.info(
            `[VideoLearningUseCases][stopVideoSession] 🛑 Kết thúc session ${input.sessionId} tại giây ${input.stopSecond}`
        );

        try {
            const updatePayload: Partial<LmVideoSession> & { id: number } = {
                id: input.sessionId,
                stop_second: input.stopSecond,
                // ended_at không cần truyền, DB sẽ tự NOW()
            };

            await this.sessionRepo.updateSession(updatePayload);

            console.info(
                `[VideoLearningUseCases][stopVideoSession] ✅ Cập nhật phiên xem video thành công, sessionId = ${input.sessionId}`
            );

            return {
                success: true,
                message: "Đã ghi nhận kết thúc phiên xem video.",
            };
        } catch (err) {
            console.error(
                `[VideoLearningUseCases][stopVideoSession] ❌ Lỗi khi cập nhật phiên xem video`,
                { error: err, input }
            );

            return {
                success: false,
                message:
                    "Không thể ghi nhận kết thúc phiên xem video. Vui lòng thử lại sau.",
            };
        }
    }
}
