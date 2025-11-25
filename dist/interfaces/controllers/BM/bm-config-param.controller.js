"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmConfigParamController = void 0;
// Gợi ý tên service/repo theo kiến trúc hiện có của bạn.
// Bạn có thể đổi lại đúng tên file/thư mục thực tế nếu đã có sẵn.
const get_home_page_param_uc_1 = require("../../../application/BM/use-cases/sales/get-home-page-param.uc");
const pg_bm_config_param_repository_1 = require("../../../infrastructure/BM/pg-bm-config-param.repository");
// Khởi tạo service
const bmConfigParamRepo = new pg_bm_config_param_repository_1.PgBMConfigParamRepository();
const getHomePageParamUC = new get_home_page_param_uc_1.GetHomePageParamUC(bmConfigParamRepo);
exports.bmConfigParamController = {
    async getHomePageCourses(req, res) {
        try {
            const courses = await getHomePageParamUC.getHomePageCourses();
            return res.status(200).json(courses);
        }
        catch (err) {
            console.error('[bmController][getHomePageCourses]', err);
            return res
                .status(404)
                .json({ error: err?.message || 'Không tìm thấy tham số courses' });
        }
    },
    async getHomePageQAs(req, res) {
        try {
            const qas = await getHomePageParamUC.getHomePageQAs();
            return res.status(200).json(qas);
        }
        catch (err) {
            console.error('[bmController][getHomePageQAs]', err);
            return res
                .status(404)
                .json({ error: err?.message || 'Không tìm thấy tham số QAs' });
        }
    },
    async getHomePageImageSlide(req, res) {
        try {
            const imageSlides = await getHomePageParamUC.getHomePageImageSlide();
            return res.status(200).json(imageSlides);
        }
        catch (err) {
            console.error('[bmController][getHomePageImageSlide]', err);
            return res
                .status(404)
                .json({ error: err?.message || 'Không tìm thấy tham số imageSlides' });
        }
    },
    async getHomePageAchievement(req, res) {
        try {
            const achievement = await getHomePageParamUC.getHomePageAchievement();
            return res.status(200).json(achievement);
        }
        catch (err) {
            console.error('[bmController][getHomePageAchievement]', err);
            return res
                .status(404)
                .json({ error: err?.message || 'Không tìm thấy tham số achievements' });
        }
    },
};
