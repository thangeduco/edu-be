// routes/lm.routes.ts

import { Router } from 'express';
import { LmGoalController } from '../controllers/LM/lm-goal.controller';
import { LmStudyPlanController } from '../controllers/LM/lm-study-plan.controller';
import { LmVideoLearningController } from '../controllers/LM/lm-video-learning.controller';
import { LmWorksheetController } from '../controllers/LM/lm-worksheet.controller';
import { LmQuizController } from '../controllers/LM/lm-quiz.controller';
import { LmProgressController } from '../controllers/LM/lm-progress.controller';
import { LmRankingReportController } from '../controllers/LM/lm-ranking-report.controller';
import { LmBadgeController } from '../controllers/LM/lm-badge.controller';

const router = Router();

const goalController = new LmGoalController();
const studyPlanController = new LmStudyPlanController();
const videoLearningController = new LmVideoLearningController();
const worksheetController = new LmWorksheetController();
const quizController = new LmQuizController();
const progressController = new LmProgressController();
const rankingReportController = new LmRankingReportController();
const badgeController = new LmBadgeController();

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
router.get('/worksheets/:worksheetId/submissions/:submissionId', (req, res) =>
  worksheetController.getWorksheetSubmission(req, res),
);
router.get('/worksheets/submissions/my', (req, res) =>
  worksheetController.listStudentSubmissions(req, res),
);
router.get('/worksheets/submissions/teacher', (req, res) =>
  worksheetController.listSubmissionsForTeacher(req, res),
);
router.post('/worksheets/:worksheetId/submissions/:submissionId/grade', (req, res) =>
  worksheetController.gradeWorksheet(req, res),
);
router.get('/worksheets/results/my', (req, res) =>
  worksheetController.listResultsForStudent(req, res),
);

// Quiz
router.post('/quiz/attempts', (req, res) => quizController.recordAttempt(req, res));
router.get('/quiz/summary', (req, res) => quizController.getSummary(req, res));

// Progress
router.get('/progress/course', (req, res) =>
  progressController.getStudentCourseProgress(req, res),
);
router.get('/progress/course/weeks', (req, res) =>
  progressController.getStudentCourseWeeksProgress(req, res),
);
router.get('/dashboard/student', (req, res) =>
  progressController.getStudentDashboard(req, res),
);
router.get('/progress/parent/child', (req, res) =>
  progressController.getParentChildCourseProgress(req, res),
);
router.get('/progress/parent/children', (req, res) =>
  progressController.getParentChildrenSummary(req, res),
);

// Rankings & reports
router.get('/rankings/course', (req, res) =>
  rankingReportController.getCourseRankings(req, res),
);
router.get('/rankings/group', (req, res) =>
  rankingReportController.getGroupRankings(req, res),
);
router.get('/reports/student', (req, res) =>
  rankingReportController.getStudentWeeklyReports(req, res),
);
router.get('/reports/parent', (req, res) =>
  rankingReportController.getParentWeeklyReports(req, res),
);

// Badges
router.post('/badges/award', (req, res) =>
  badgeController.awardBadge(req, res),
);

export default router;
