// routes/bm.routes.ts
// Skeleton routes cho BM - anh có thể map thêm vào BPMN H1/H2/H3/H4...

import { Router } from 'express';
import { BmAuthController } from '../controllers/BM/bm-auth.controller';
import { BmParentController } from '../controllers/BM/bm-parent.controller';
import { BmStudentController } from '../controllers/BM/bm-student.controller';

const router = Router();

const authController = new BmAuthController();
const parentController = new BmParentController();
const studentController = new BmStudentController();

// Auth
router.post('/auth/register-parent-student', (req, res) =>
  authController.registerParentAndStudent(req, res),
);
router.post('/auth/login', (req, res) => authController.login(req, res));
router.post('/auth/logout', (req, res) => authController.logout(req, res));
router.post('/auth/refresh-token', (req, res) =>
  authController.refreshToken(req, res),
);

// Parent
router.get('/parent/profile', (req, res) =>
  parentController.getParentProfile(req, res),
);
router.put('/parent/profile', (req, res) =>
  parentController.updateParentProfile(req, res),
);
router.get('/parent/children', (req, res) =>
  parentController.listChildren(req, res),
);

// Student
router.get('/student/profile/:studentId', (req, res) =>
  studentController.getStudentProfile(req, res),
);

// home page params
import { bmConfigParamController } from '../controllers/BM/bm-config-param.controller';

router.get('/home-page/courses', (req, res) =>
  bmConfigParamController.getHomePageCourses(req, res),
);

router.get('/home-page/qas', (req, res) =>
  bmConfigParamController.getHomePageQAs(req, res),
);

router.get('/home-page/image-slide', (req, res) =>
  bmConfigParamController.getHomePageImageSlide(req, res),
);

router.get('/home-page/archievement', (req, res) =>
  bmConfigParamController.getHomePageAchievement(req, res),
);

export default router;
