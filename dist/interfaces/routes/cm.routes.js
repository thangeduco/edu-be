"use strict";
// routes/cm.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cm_course_controller_1 = require("../controllers/CM/cm-course.controller");
const cm_week_controller_1 = require("../controllers/CM/cm-week.controller");
const cm_lesson_controller_1 = require("../controllers/CM/cm-lesson.controller");
const cm_video_controller_1 = require("../controllers/CM/cm-video.controller");
const cm_worksheet_controller_1 = require("../controllers/CM/cm-worksheet.controller");
const cm_question_controller_1 = require("../controllers/CM/cm-question.controller");
const cm_course_week_detail_controller_1 = require("../controllers/CM/cm-course-week-detail.controller");
const router = (0, express_1.Router)();
const courseController = new cm_course_controller_1.CmCourseController();
const weekController = new cm_week_controller_1.CmWeekController();
const lessonController = new cm_lesson_controller_1.CmLessonController();
const videoController = new cm_video_controller_1.CmVideoController();
const worksheetController = new cm_worksheet_controller_1.CmWorksheetController();
const questionController = new cm_question_controller_1.CmQuestionController();
/* -------------------------------------------------------------------------- */
/*                                NEW API (PUBLIC VIEW)                       */
/* -------------------------------------------------------------------------- */
/**
 * Lấy toàn bộ dữ liệu header + sidebar + body của khoá học cho public view
 * GET /cm/courses/:courseCode/week-detail/public
 */
router.get('/courses/:courseCode/week-detail/public', (req, res) => cm_course_week_detail_controller_1.cmCourseWeekDetailController.getCourseWeekDetailForPublicView(req, res));
/* -------------------------------------------------------------------------- */
/*                                   OLD APIs                                 */
/* -------------------------------------------------------------------------- */
// Courses
router.get('/courses', (req, res) => courseController.listCourses(req, res));
router.get('/courses/:courseId', (req, res) => courseController.getCourseDetail(req, res));
router.get('/courses/:courseId/weeks', (req, res) => courseController.getCourseWeeks(req, res));
// Weeks
router.get('/weeks/:weekId', (req, res) => weekController.getWeekDetail(req, res));
router.get('/weeks/:weekId/lessons', (req, res) => weekController.getWeekLessons(req, res));
// Lessons
router.get('/lessons/:lessonId', (req, res) => lessonController.getLessonDetail(req, res));
// Videos
router.get('/lessons/:lessonId/video', (req, res) => videoController.getLessonVideo(req, res));
router.get('/videos/:videoId', (req, res) => videoController.getVideoDetail(req, res));
// Worksheets
router.get('/weeks/:weekId/worksheets', (req, res) => worksheetController.getWeekWorksheets(req, res));
router.get('/worksheets/:worksheetId', (req, res) => worksheetController.getWorksheetDetail(req, res));
// Questions
router.get('/questions/:questionId', (req, res) => questionController.getQuestionDetail(req, res));
router.get('/questions', (req, res) => questionController.searchQuestions(req, res));
router.get('/videos/:videoId/questions', (req, res) => questionController.getVideoQuestions(req, res));
router.get('/worksheets/:worksheetId/questions', (req, res) => questionController.getWorksheetQuestions(req, res));
exports.default = router;
