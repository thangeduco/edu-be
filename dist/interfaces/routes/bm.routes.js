"use strict";
// routes/bm.routes.ts
// Skeleton routes cho BM - anh có thể map thêm vào BPMN H1/H2/H3/H4...
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bm_auth_controller_1 = require("../controllers/BM/bm-auth.controller");
const bm_parent_controller_1 = require("../controllers/BM/bm-parent.controller");
const bm_student_controller_1 = require("../controllers/BM/bm-student.controller");
const router = (0, express_1.Router)();
const authController = new bm_auth_controller_1.BmAuthController();
const parentController = new bm_parent_controller_1.BmParentController();
const studentController = new bm_student_controller_1.BmStudentController();
// Auth
router.post('/auth/register-parent-student', (req, res) => authController.registerParentAndStudent(req, res));
router.post('/auth/login', (req, res) => authController.login(req, res));
router.post('/auth/logout', (req, res) => authController.logout(req, res));
router.post('/auth/refresh-token', (req, res) => authController.refreshToken(req, res));
// Parent
router.get('/parent/profile', (req, res) => parentController.getParentProfile(req, res));
router.put('/parent/profile', (req, res) => parentController.updateParentProfile(req, res));
router.get('/parent/children', (req, res) => parentController.listChildren(req, res));
// Student
router.get('/student/profile/:studentId', (req, res) => studentController.getStudentProfile(req, res));
// home page params
const bm_config_param_controller_1 = require("../controllers/BM/bm-config-param.controller");
router.get('/home-page/courses', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageCourses(req, res));
router.get('/home-page/qas', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageQAs(req, res));
router.get('/home-page/image-slide', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageImageSlide(req, res));
router.get('/home-page/archievement', (req, res) => bm_config_param_controller_1.bmConfigParamController.getHomePageAchievement(req, res));
exports.default = router;
