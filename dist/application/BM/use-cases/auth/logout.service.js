"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutService = void 0;
class LogoutService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(input) {
        const { token, device, ipAddress, userAgent } = input;
        if (!token) {
            console.warn('[LogoutService] Token không hợp lệ');
            throw new Error('Token là bắt buộc');
        }
        // endSessionByToken sẽ:
        //  - UPDATE bm_user_sessions: status = ENDED, ended_at = NOW()
        //  - INSERT log vào bm_user_session_logs (SESSION_END)
        await this.repo.endSessionByToken(token, device ?? null, ipAddress ?? null, userAgent ?? null);
    }
}
exports.LogoutService = LogoutService;
