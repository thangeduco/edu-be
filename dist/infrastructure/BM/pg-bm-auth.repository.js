"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgAuthRepository = void 0;
const pgClient_1 = require("../db/pgClient");
class PgAuthRepository {
    // ---------------------------------------------------------------------------
    // USER
    // ---------------------------------------------------------------------------
    async findUserByEmailOrPhone(identifier) {
        const res = await pgClient_1.pgPool.query(`SELECT 
        u.*, 
        p.avatar_image, 
        p.grade, 
        p.gender, 
        p.dob,
        p.slogen
      FROM bm_users u
      LEFT JOIN bm_user_profiles p ON u.id = p.user_id
      WHERE u.email = $1 OR u.phone = $1
      LIMIT 1`, [identifier]);
        const row = res.rows[0];
        if (!row)
            return null;
        return this.mapUserWithProfile(row);
    }
    async getUserById(userId) {
        const res = await pgClient_1.pgPool.query(`SELECT 
        u.*, 
        p.avatar_image, 
        p.grade, 
        p.gender, 
        p.dob,
        p.slogen
      FROM bm_users u
      LEFT JOIN bm_user_profiles p ON u.id = p.user_id
      WHERE u.id = $1
      LIMIT 1`, [userId]);
        const row = res.rows[0];
        if (!row)
            return null;
        return this.mapUserWithProfile(row);
    }
    async createUser(user) {
        const client = await pgClient_1.pgPool.connect();
        try {
            await client.query('BEGIN');
            // INSERT vào bm_users
            const userInsertResult = await client.query(`INSERT INTO bm_users (full_name, email, phone, password_hash, role, status, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         RETURNING *`, [
                user.fullName,
                user.email ?? null,
                user.phone ?? null,
                user.passwordHash,
                user.role ?? 'student', // default nếu không truyền
                user.status ?? 'active', // default nếu không truyền
            ]);
            const userRow = userInsertResult.rows[0];
            const userId = userRow.id;
            // Chuẩn hoá profile
            const profile = user.profile ?? {};
            const avatarImage = profile.avatarImage ?? null;
            const grade = typeof profile.grade === 'number' && !Number.isNaN(profile.grade)
                ? profile.grade
                : null;
            const gender = profile.gender ?? null;
            const dob = profile.dob ?? null; // dạng 'YYYY-MM-DD'
            const slogen = profile.slogen ?? null;
            // INSERT vào bm_user_profiles
            await client.query(`INSERT INTO bm_user_profiles (user_id, avatar_image, grade, gender, dob, slogen)
         VALUES ($1, $2, $3, $4, $5, $6)`, [userId, avatarImage, grade, gender, dob, slogen]);
            await client.query('COMMIT');
            // Gộp row user + profile để map sang domain model
            return this.mapUserWithProfile({
                ...userRow,
                avatar_image: avatarImage,
                grade,
                gender,
                dob,
                slogen,
            });
        }
        catch (err) {
            await client.query('ROLLBACK');
            console.error('[PgAuthRepository][createUser] ❌ Lỗi khi tạo user:', err);
            throw err;
        }
        finally {
            client.release();
        }
    }
    // ---------------------------------------------------------------------------
    // SESSION
    // ---------------------------------------------------------------------------
    /**
     * Tạo session mới và ghi log SESSION_START
     */
    async createSession(userId, token, device, expiredAt, ipAddress, userAgent) {
        const client = await pgClient_1.pgPool.connect();
        try {
            await client.query('BEGIN');
            // 1. Tạo session đang ACTIVE
            const sessionRes = await client.query(`INSERT INTO bm_user_sessions (
            user_id,
            token,
            device,
            ip_address,
            user_agent,
            started_at,
            expired_at,
            status,
            created_at,
            updated_at
         )
         VALUES ($1, $2, $3, $4, $5, NOW(), $6, 'ACTIVE', NOW(), NOW())
         RETURNING id`, [
                userId,
                token,
                device,
                ipAddress ?? null,
                userAgent ?? null,
                expiredAt,
            ]);
            const sessionId = sessionRes.rows[0]?.id;
            // 2. Ghi log SESSION_START
            await client.query(`INSERT INTO bm_user_session_logs (
            user_id,
            session_id,
            token,
            device,
            action,
            ip_address,
            user_agent,
            created_at
         )
         VALUES ($1, $2, $3, $4, 'SESSION_START', $5, $6, NOW())`, [
                userId,
                sessionId,
                token,
                device,
                ipAddress ?? null,
                userAgent ?? null,
            ]);
            await client.query('COMMIT');
        }
        catch (err) {
            await client.query('ROLLBACK');
            console.error('[PgAuthRepository][createSession] ❌ Lỗi khi tạo session:', err);
            throw err;
        }
        finally {
            client.release();
        }
    }
    /**
     * Kết thúc session theo token và ghi log SESSION_END
     */
    async endSessionByToken(token, device, ipAddress, userAgent) {
        const client = await pgClient_1.pgPool.connect();
        try {
            await client.query('BEGIN');
            // 1. Lấy session hiện tại
            const res = await client.query(`SELECT id, user_id, device, ip_address, user_agent
         FROM bm_user_sessions
         WHERE token = $1
         LIMIT 1`, [token]);
            const session = res.rows[0];
            if (!session) {
                // Không tìm thấy session -> không làm gì thêm
                await client.query('ROLLBACK');
                console.warn('[PgAuthRepository][endSessionByToken] Không tìm thấy session với token', token);
                return;
            }
            const sessionId = session.id;
            const userId = session.user_id;
            const finalDevice = device ?? session.device ?? null;
            const finalIp = ipAddress ?? session.ip_address ?? null;
            const finalUa = userAgent ?? session.user_agent ?? null;
            // 2. Update trạng thái session -> ENDED
            await client.query(`UPDATE bm_user_sessions
         SET status = 'ENDED',
             ended_at = NOW(),
             updated_at = NOW()
         WHERE id = $1`, [sessionId]);
            // 3. Ghi log SESSION_END
            await client.query(`INSERT INTO bm_user_session_logs (
            user_id,
            session_id,
            token,
            device,
            action,
            ip_address,
            user_agent,
            created_at
         )
         VALUES ($1, $2, $3, $4, 'SESSION_END', $5, $6, NOW())`, [userId, sessionId, token, finalDevice, finalIp, finalUa]);
            await client.query('COMMIT');
        }
        catch (err) {
            await client.query('ROLLBACK');
            console.error('[PgAuthRepository][endSessionByToken] ❌ Lỗi khi kết thúc session:', err);
            throw err;
        }
        finally {
            client.release();
        }
    }
    // ---------------------------------------------------------------------------
    // MAPPING
    // ---------------------------------------------------------------------------
    // 🧩 Map từ DB row → domain model BMUser
    mapUserWithProfile(row) {
        const createdAt = row.created_at instanceof Date
            ? row.created_at.toISOString()
            : new Date(row.created_at).toISOString();
        const profile = {
            avatarImage: row.avatar_image ?? undefined,
            grade: row.grade ?? undefined,
            gender: row.gender ?? undefined,
            dob: row.dob
                ? row.dob instanceof Date
                    ? row.dob.toISOString().split('T')[0]
                    : new Date(row.dob).toISOString().split('T')[0]
                : undefined,
            slogen: row.slogen ?? undefined,
        };
        const hasProfile = profile.avatarImage !== undefined ||
            profile.grade !== undefined ||
            profile.gender !== undefined ||
            profile.dob !== undefined ||
            profile.slogen !== undefined;
        return {
            id: row.id,
            fullName: row.full_name,
            email: row.email,
            phone: row.phone,
            passwordHash: row.password_hash,
            status: row.status,
            role: row.role,
            createdAt,
            profile: hasProfile ? profile : undefined,
        };
    }
}
exports.PgAuthRepository = PgAuthRepository;
