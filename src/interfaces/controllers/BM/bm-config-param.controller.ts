import { Request, Response } from 'express';

// Gợi ý tên service/repo theo kiến trúc hiện có của bạn.
// Bạn có thể đổi lại đúng tên file/thư mục thực tế nếu đã có sẵn.
import { GetHomePageParamUC } from '../../../application/BM/use-cases/sales/get-home-page-param.uc';
import { PgBMConfigParamRepository } from '../../../infrastructure/BM/pg-bm-config-param.repository';

// Khởi tạo service
const bmConfigParamRepo = new PgBMConfigParamRepository();
const getHomePageParamUC = new GetHomePageParamUC(bmConfigParamRepo);

export const bmConfigParamController = {

  async getHomePageCourses(req: Request, res: Response) {
    try {

      const courses = await getHomePageParamUC.getHomePageCourses();

      return res.status(200).json(courses);

    } catch (err: any) {
      console.error('[bmController][getHomePageCourses]', err);
      return res
        .status(404)
        .json({ error: err?.message || 'Không tìm thấy tham số courses' });
    }
  },

  async getHomePageQAs(req: Request, res: Response) {
    try {
      const qas = await getHomePageParamUC.getHomePageQAs();

      return res.status(200).json(qas);

    } catch (err: any) {
      console.error('[bmController][getHomePageQAs]', err);
      return res
        .status(404)
        .json({ error: err?.message || 'Không tìm thấy tham số QAs' });
    }
  },

  async getHomePageImageSlide(req: Request, res: Response) {
    try {

      const imageSlides = await getHomePageParamUC.getHomePageImageSlide();
      return res.status(200).json(imageSlides);

    } catch (err: any) {
      console.error('[bmController][getHomePageImageSlide]', err);
      return res
        .status(404)
        .json({ error: err?.message || 'Không tìm thấy tham số imageSlides' });
    }
  },

  async getHomePageAchievement(req: Request, res: Response) {
    try {

      const achievement = await getHomePageParamUC.getHomePageAchievement();
      return res.status(200).json(achievement);
      
    } catch (err: any) {
      console.error('[bmController][getHomePageAchievement]', err);
      return res
        .status(404)
        .json({ error: err?.message || 'Không tìm thấy tham số achievements' });
    }
  },
};
