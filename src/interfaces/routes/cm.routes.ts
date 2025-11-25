// routes/cm.routes.ts

import { Router } from 'express';
import { CmCourseController } from '../controllers/CM/cm-course.controller';
import { CmWeekController } from '../controllers/CM/cm-week.controller';
import { CmLessonController } from '../controllers/CM/cm-lesson.controller';
import { CmVideoController } from '../controllers/CM/cm-video.controller';
import { CmWorksheetController } from '../controllers/CM/cm-worksheet.controller';
import { CmQuestionController } from '../controllers/CM/cm-question.controller';

const router = Router();

const courseController = new CmCourseController();
const weekController = new CmWeekController();
const lessonController = new CmLessonController();
const videoController = new CmVideoController();
const worksheetController = new CmWorksheetController();
const questionController = new CmQuestionController();

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

export default router;
