"use strict";
// routes/bm.routes.ts
// Skeleton routes cho BM - anh có thể map thêm vào BPMN H1/H2/H3/H4...
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// api for authentication of BM.
const bm_auth_controller_1 = require("../controllers/BM/bm-auth.controller");
router.post('/auth/login', bm_auth_controller_1.bmAuthController.login);
router.post('/auth/logout', bm_auth_controller_1.bmAuthController.logout);
router.post('/auth/register', bm_auth_controller_1.bmAuthController.register);
router.get('/auth/:userId/info', bm_auth_controller_1.bmAuthController.getUserInfo);
// api for home page params of BM
const bm_config_param_controller_1 = require("../controllers/BM/bm-config-param.controller");
router.get('/home-page/courses', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageCourses(req, res));
router.get('/home-page/qas', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageQAs(req, res));
router.get('/home-page/image-slide', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageImageSlide(req, res));
router.get('/home-page/archievement', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageAchievement(req, res));
// api for product management of BM
const bm_product_controller_1 = require("../controllers/BM/bm-product.controller");
router.get('/products/:productCode', (req, res) => bm_product_controller_1.bmProductController.getProductDetailByProductCode(req, res));
const bm_parent_controller_1 = require("../controllers/BM/bm-parent.controller");
const bm_student_controller_1 = require("../controllers/BM/bm-student.controller");
const parentController = new bm_parent_controller_1.BmParentController();
const studentController = new bm_student_controller_1.BmStudentController();
// thêm api kiểm tra xem có phải học sinh đăng nhập lần đầu trong ngày hay không
// Parent
router.get('/parent/profile', (req, res) => parentController.getParentProfile(req, res));
router.put('/parent/profile', (req, res) => parentController.updateParentProfile(req, res));
router.get('/parent/children', (req, res) => parentController.listChildren(req, res));
// Student
router.get('/student/profile/:studentId', (req, res) => studentController.getStudentProfile(req, res));
exports.default = router;
