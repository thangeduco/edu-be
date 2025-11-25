"use strict";
// routes/im.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const im_interaction_controller_1 = require("../controllers/IM/im-interaction.controller");
const im_gamification_controller_1 = require("../controllers/IM/im-gamification.controller");
const im_runtime_controller_1 = require("../controllers/IM/im-runtime.controller");
const router = (0, express_1.Router)();
const interactionController = new im_interaction_controller_1.ImInteractionController();
const gamificationController = new im_gamification_controller_1.ImGamificationController();
const runtimeController = new im_runtime_controller_1.ImRuntimeController();
// Interaction types & configs
router.get('/interaction-types', (req, res) => interactionController.listInteractionTypes(req, res));
router.get('/interaction-configs', (req, res) => interactionController.listInteractionConfigs(req, res));
router.get('/interaction-configs/:configId', (req, res) => interactionController.getInteractionConfig(req, res));
// Video timeline
router.get('/videos/:videoId/timeline', (req, res) => interactionController.getVideoTimeline(req, res));
// Runtime
router.post('/runtime/next-step', (req, res) => runtimeController.getNextStep(req, res));
// Gamification
router.get('/animations', (req, res) => gamificationController.listAnimations(req, res));
router.get('/sounds', (req, res) => gamificationController.listSounds(req, res));
router.get('/badge-presets', (req, res) => gamificationController.listBadgePresets(req, res));
exports.default = router;
