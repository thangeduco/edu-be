"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_lm_video_learning_repository_1 = require("../pg-lm-video-learning.repository");
// src/infrastructure/LM/pg-lm-video-learning.repository.createSession.spec.ts
// Mock for pg.Pool
class MockpgPool {
    constructor() {
        this.query = jest.fn();
    }
}
describe('PgVideoSessionRepository.createSession() createSession method', () => {
    // Happy Path Tests
    describe('Happy Paths', () => {
        let mockPgPool;
        let repo;
        beforeEach(() => {
            mockPgPool = new MockpgPool();
            repo = new pg_lm_video_learning_repository_1.PgVideoSessionRepository(mockPgPool);
        });
        it('should insert a new session and return the inserted session (all fields present)', async () => {
            // This test ensures that a session with all fields is inserted and returned correctly.
            const inputSession = {
                student_id: 1,
                video_id: 2,
                started_at: new Date('2024-06-01T10:00:00Z'),
                ended_at: new Date('2024-06-01T10:10:00Z'),
                start_second: 0,
                stop_second: 600,
                total_watch_seconds: 600,
                device_type: 'web',
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [
                    {
                        id: 123,
                        student_id: 1,
                        video_id: 2,
                        started_at: new Date('2024-06-01T10:00:00Z'),
                        ended_at: new Date('2024-06-01T10:10:00Z'),
                        start_second: 0,
                        stop_second: 600,
                        total_watch_seconds: 600,
                        device_type: 'web',
                        created_at: new Date('2024-06-01T10:00:00Z'),
                        updated_at: new Date('2024-06-01T10:00:00Z'),
                    },
                ],
            });
            const result = await repo.createSession(inputSession);
            expect(mockPgPool.query).toHaveBeenCalledTimes(1);
            expect(result).toEqual({
                id: 123,
                student_id: 1,
                video_id: 2,
                started_at: new Date('2024-06-01T10:00:00Z'),
                ended_at: new Date('2024-06-01T10:10:00Z'),
                start_second: 0,
                stop_second: 600,
                total_watch_seconds: 600,
                device_type: 'web',
                created_at: new Date('2024-06-01T10:00:00Z'),
                updated_at: new Date('2024-06-01T10:00:00Z'),
            });
        });
        it('should insert a session with only required fields and return the inserted session', async () => {
            // This test ensures that a session with only required fields is handled correctly.
            const inputSession = {
                student_id: 2,
                video_id: 3,
                started_at: new Date('2024-06-01T11:00:00Z'),
                start_second: 10,
                device_type: 'mobile',
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [
                    {
                        id: 124,
                        student_id: 2,
                        video_id: 3,
                        started_at: new Date('2024-06-01T11:00:00Z'),
                        ended_at: null,
                        start_second: 10,
                        stop_second: null,
                        total_watch_seconds: null,
                        device_type: 'mobile',
                        created_at: new Date('2024-06-01T11:00:00Z'),
                        updated_at: new Date('2024-06-01T11:00:00Z'),
                    },
                ],
            });
            const result = await repo.createSession(inputSession);
            expect(mockPgPool.query).toHaveBeenCalledTimes(1);
            expect(result).toEqual({
                id: 124,
                student_id: 2,
                video_id: 3,
                started_at: new Date('2024-06-01T11:00:00Z'),
                ended_at: null,
                start_second: 10,
                stop_second: null,
                total_watch_seconds: null,
                device_type: 'mobile',
                created_at: new Date('2024-06-01T11:00:00Z'),
                updated_at: new Date('2024-06-01T11:00:00Z'),
            });
        });
        it('should pass correct SQL and parameters to pool.query', async () => {
            // This test ensures that the SQL and parameters are constructed and passed correctly.
            const inputSession = {
                student_id: 5,
                video_id: 7,
                started_at: new Date('2024-06-01T12:00:00Z'),
                ended_at: new Date('2024-06-01T12:30:00Z'),
                start_second: 0,
                stop_second: 1800,
                total_watch_seconds: 1800,
                device_type: 'tv',
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [
                    {
                        id: 200,
                        student_id: 5,
                        video_id: 7,
                        started_at: new Date('2024-06-01T12:00:00Z'),
                        ended_at: new Date('2024-06-01T12:30:00Z'),
                        start_second: 0,
                        stop_second: 1800,
                        total_watch_seconds: 1800,
                        device_type: 'tv',
                        created_at: new Date('2024-06-01T12:00:00Z'),
                        updated_at: new Date('2024-06-01T12:00:00Z'),
                    },
                ],
            });
            await repo.createSession(inputSession);
            expect(mockPgPool.query).toHaveBeenCalledTimes(1);
            const [sql, params] = mockPgPool.query.mock.calls[0];
            expect(sql).toContain('INSERT INTO lm_video_sessions');
            expect(params).toEqual([
                5,
                7,
                new Date('2024-06-01T12:00:00Z'),
                new Date('2024-06-01T12:30:00Z'),
                0,
                1800,
                1800,
                'tv',
            ]);
        });
    });
    // Edge Case Tests
    describe('Edge Cases', () => {
        let mockPgPool;
        let repo;
        beforeEach(() => {
            mockPgPool = new MockpgPool();
            repo = new pg_lm_video_learning_repository_1.PgVideoSessionRepository(mockPgPool);
        });
        it('should throw an error if pool.query returns no rows', async () => {
            // This test ensures that an error is thrown if the insert did not return any rows.
            const inputSession = {
                student_id: 10,
                video_id: 20,
                started_at: new Date('2024-06-01T13:00:00Z'),
                start_second: 0,
                device_type: 'web',
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [],
            });
            await expect(repo.createSession(inputSession)).rejects.toThrow('[PgVideoSessionRepository][createSession] Không insert được bản ghi lm_video_sessions');
        });
        it('should propagate errors thrown by pool.query', async () => {
            // This test ensures that if pool.query throws, the error is propagated.
            const inputSession = {
                student_id: 11,
                video_id: 21,
                started_at: new Date('2024-06-01T14:00:00Z'),
                start_second: 0,
                device_type: 'web',
            };
            jest.mocked(mockPgPool.query).mockRejectedValue(new Error('Database connection error'));
            await expect(repo.createSession(inputSession)).rejects.toThrow('Database connection error');
        });
        it('should handle optional fields (ended_at, stop_second, total_watch_seconds) as null if not provided', async () => {
            // This test ensures that optional fields are passed as null when not provided.
            const inputSession = {
                student_id: 12,
                video_id: 22,
                started_at: new Date('2024-06-01T15:00:00Z'),
                start_second: 5,
                device_type: 'tablet',
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [
                    {
                        id: 300,
                        student_id: 12,
                        video_id: 22,
                        started_at: new Date('2024-06-01T15:00:00Z'),
                        ended_at: null,
                        start_second: 5,
                        stop_second: null,
                        total_watch_seconds: null,
                        device_type: 'tablet',
                        created_at: new Date('2024-06-01T15:00:00Z'),
                        updated_at: new Date('2024-06-01T15:00:00Z'),
                    },
                ],
            });
            await repo.createSession(inputSession);
            const [sql, params] = mockPgPool.query.mock.calls[0];
            expect(params[3]).toBeNull(); // ended_at
            expect(params[5]).toBeNull(); // stop_second
            expect(params[6]).toBeNull(); // total_watch_seconds
        });
        it('should handle when device_type is not provided', async () => {
            // This test ensures that device_type can be undefined and is passed as undefined.
            const inputSession = {
                student_id: 13,
                video_id: 23,
                started_at: new Date('2024-06-01T16:00:00Z'),
                start_second: 0,
            };
            jest.mocked(mockPgPool.query).mockResolvedValue({
                rows: [
                    {
                        id: 400,
                        student_id: 13,
                        video_id: 23,
                        started_at: new Date('2024-06-01T16:00:00Z'),
                        ended_at: null,
                        start_second: 0,
                        stop_second: null,
                        total_watch_seconds: null,
                        device_type: undefined,
                        created_at: new Date('2024-06-01T16:00:00Z'),
                        updated_at: new Date('2024-06-01T16:00:00Z'),
                    },
                ],
            });
            await repo.createSession(inputSession);
            const [sql, params] = mockPgPool.query.mock.calls[0];
            expect(params[7]).toBeUndefined();
        });
    });
});
