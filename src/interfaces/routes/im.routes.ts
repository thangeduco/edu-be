// routes/im.routes.ts

import { Router } from 'express';
import { ImInteractionController } from '../controllers/IM/im-interaction.controller';
import { ImGamificationController } from '../controllers/IM/im-gamification.controller';
import { ImRuntimeController } from '../controllers/IM/im-runtime.controller';

const router = Router();

const interactionController = new ImInteractionController();
const gamificationController = new ImGamificationController();
const runtimeController = new ImRuntimeController();

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

export default router;
