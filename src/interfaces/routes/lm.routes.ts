// src/interfaces/routes/lm.routes.ts

import { Router } from 'express';

import { lmVideoLearningController } from '../controllers/LM/lm-video-learning.controller';

const router = Router();

/**
 * ============================
 * LM - Video Learning Routes
 * ============================
 */

/**
 * Học sinh bắt đầu xem video bài giảng
 * POST /lm/video-sessions/start
 */
router.post('/video-sessions/start', (req, res) =>
  lmVideoLearningController.startVideoSession(req, res)
);

/**
 * Học sinh kết thúc xem video bài giảng
 * POST /lm/video-sessions/stop
 */
router.post('/video-sessions/stop', (req, res) =>
  lmVideoLearningController.stopVideoSession(req, res)
);

export default router;
