"use strict";
// routes/lm.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lm_goal_controller_1 = require("../controllers/LM/lm-goal.controller");
const lm_study_plan_controller_1 = require("../controllers/LM/lm-study-plan.controller");
const lm_video_learning_controller_1 = require("../controllers/LM/lm-video-learning.controller");
const lm_worksheet_controller_1 = require("../controllers/LM/lm-worksheet.controller");
const lm_quiz_controller_1 = require("../controllers/LM/lm-quiz.controller");
const lm_progress_controller_1 = require("../controllers/LM/lm-progress.controller");
const lm_ranking_report_controller_1 = require("../controllers/LM/lm-ranking-report.controller");
const lm_badge_controller_1 = require("../controllers/LM/lm-badge.controller");
const router = (0, express_1.Router)();
const goalController = new lm_goal_controller_1.LmGoalController();
const studyPlanController = new lm_study_plan_controller_1.LmStudyPlanController();
const videoLearningController = new lm_video_learning_controller_1.LmVideoLearningController();
const worksheetController = new lm_worksheet_controller_1.LmWorksheetController();
const quizController = new lm_quiz_controller_1.LmQuizController();
const progressController = new lm_progress_controller_1.LmProgressController();
const rankingReportController = new lm_ranking_report_controller_1.LmRankingReportController();
const badgeController = new lm_badge_controller_1.LmBadgeController();
// Goals
router.post('/goals', (req, res) => goalController.createGoal(req, res));
router.get('/goals', (req, res) => goalController.listGoals(req, res));
router.put('/goals/:goalId', (req, res) => goalController.updateGoal(req, res));
// Study plans
router.post('/study-plans', (req, res) => studyPlanController.createStudyPlan(req, res));
router.get('/study-plans/current', (req, res) => studyPlanController.getCurrentStudyPlan(req, res));
// Video learning
router.post('/video-sessions/start', (req, res) => videoLearningController.startVideoSession(req, res));
router.post('/video-sessions/stop', (req, res) => videoLearningController.stopVideoSession(req, res));
router.get('/video-progress', (req, res) => videoLearningController.getVideoProgress(req, res));
// Worksheets
router.post('/worksheets/submit', (req, res) => worksheetController.submitWorksheet(req, res));
router.get('/worksheets/:worksheetId/submissions/:submissionId', (req, res) => worksheetController.getWorksheetSubmission(req, res));
router.get('/worksheets/submissions/my', (req, res) => worksheetController.listStudentSubmissions(req, res));
router.get('/worksheets/submissions/teacher', (req, res) => worksheetController.listSubmissionsForTeacher(req, res));
router.post('/worksheets/:worksheetId/submissions/:submissionId/grade', (req, res) => worksheetController.gradeWorksheet(req, res));
router.get('/worksheets/results/my', (req, res) => worksheetController.listResultsForStudent(req, res));
// Quiz
router.post('/quiz/attempts', (req, res) => quizController.recordAttempt(req, res));
router.get('/quiz/summary', (req, res) => quizController.getSummary(req, res));
// Progress
router.get('/progress/course', (req, res) => progressController.getStudentCourseProgress(req, res));
router.get('/progress/course/weeks', (req, res) => progressController.getStudentCourseWeeksProgress(req, res));
router.get('/dashboard/student', (req, res) => progressController.getStudentDashboard(req, res));
router.get('/progress/parent/child', (req, res) => progressController.getParentChildCourseProgress(req, res));
router.get('/progress/parent/children', (req, res) => progressController.getParentChildrenSummary(req, res));
// Rankings & reports
router.get('/rankings/course', (req, res) => rankingReportController.getCourseRankings(req, res));
router.get('/rankings/group', (req, res) => rankingReportController.getGroupRankings(req, res));
router.get('/reports/student', (req, res) => rankingReportController.getStudentWeeklyReports(req, res));
router.get('/reports/parent', (req, res) => rankingReportController.getParentWeeklyReports(req, res));
// Badges
router.post('/badges/award', (req, res) => badgeController.awardBadge(req, res));
exports.default = router;
