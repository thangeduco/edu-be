// routes/bm.routes.ts
// Skeleton routes cho BM - anh có thể map thêm vào BPMN H1/H2/H3/H4...

import { Router } from 'express';
const router = Router();


// api for authentication of BM.
import { bmAuthController } from '../controllers/BM/bm-auth.controller';
router.post('/auth/login', bmAuthController.login);
router.post('/auth/logout', bmAuthController.logout);
router.post('/auth/register', bmAuthController.register);
router.get('/auth/:userId/info', bmAuthController.getUserInfo);

// api for home page params of BM
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

// api for product management of BM
import { bmProductController } from '../controllers/BM/bm-product.controller';

router.get('/products/:productCode', (req, res) =>
  bmProductController.getProductDetailByProductCode(req, res),
);















import { BmParentController } from '../controllers/BM/bm-parent.controller';
import { BmStudentController } from '../controllers/BM/bm-student.controller';



const parentController = new BmParentController();
const studentController = new BmStudentController();



// thêm api kiểm tra xem có phải học sinh đăng nhập lần đầu trong ngày hay không

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



export default router;
