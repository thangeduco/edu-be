"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmController = exports.CmController = void 0;
class CmController {
    // COURSES
    async listCourses(req, res) {
        res.json({ message: 'listCourses not implemented yet' });
    }
    async getCourseDetail(req, res) {
        res.json({ message: 'getCourseDetail not implemented yet' });
    }
    async getCourseWeeks(req, res) {
        res.json({ message: 'getCourseWeeks not implemented yet' });
    }
    async getWeekDetail(req, res) {
        res.json({ message: 'getWeekDetail not implemented yet' });
    }
    async getWeekLessons(req, res) {
        res.json({ message: 'getWeekLessons not implemented yet' });
    }
    async getLessonDetail(req, res) {
        res.json({ message: 'getLessonDetail not implemented yet' });
    }
    // VIDEOS
    async getLessonVideo(req, res) {
        res.json({ message: 'getLessonVideo not implemented yet' });
    }
    async getVideoDetail(req, res) {
        res.json({ message: 'getVideoDetail not implemented yet' });
    }
    // WORKSHEETS
    async getWeekWorksheets(req, res) {
        res.json({ message: 'getWeekWorksheets not implemented yet' });
    }
    async getWorksheetDetail(req, res) {
        res.json({ message: 'getWorksheetDetail not implemented yet' });
    }
    // QUESTIONS
    async getQuestionDetail(req, res) {
        res.json({ message: 'getQuestionDetail not implemented yet' });
    }
    async searchQuestions(req, res) {
        res.json({ message: 'searchQuestions not implemented yet' });
    }
    async getVideoQuestions(req, res) {
        res.json({ message: 'getVideoQuestions not implemented yet' });
    }
    async getWorksheetQuestions(req, res) {
        res.json({ message: 'getWorksheetQuestions not implemented yet' });
    }
}
exports.CmController = CmController;
exports.cmController = new CmController();
