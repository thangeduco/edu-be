"use strict";
// src/interfaces/routes/lm.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lm_video_learning_controller_1 = require("../controllers/LM/lm-video-learning.controller");
const router = (0, express_1.Router)();
/**
 * ============================
 * LM - Video Learning Routes
 * ============================
 */
/**
 * Học sinh bắt đầu xem video bài giảng
 * POST /lm/video-sessions/start
 */
router.post('/video-sessions/start', (req, res) => lm_video_learning_controller_1.lmVideoLearningController.startVideoSession(req, res));
/**
 * Học sinh kết thúc xem video bài giảng
 * POST /lm/video-sessions/stop
 */
router.post('/video-sessions/stop', (req, res) => lm_video_learning_controller_1.lmVideoLearningController.stopVideoSession(req, res));
exports.default = router;
