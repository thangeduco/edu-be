import { IBMConfigParamRepo } from '../../../../domain/BM/repos/ibm-config-param.repo';
import {
  HomePageCoursesDto,
  HomePageImageSlideDto,
  HomePageQAsDto,
  HomePageAchievementDto,
} from '../../dtos/home-page-param.dto';

/**
 * Use Case: GetHomePageParamUC
 * Lấy toàn bộ cấu hình trang chủ của 1 tenant.
 */
export class GetHomePageParamUC {
  constructor(private repo: IBMConfigParamRepo) { }


  async getHomePageCourses(): Promise<HomePageCoursesDto> {
    console.info(`[getHomePageCourses] Lấy homePageCourses`);

    const homePageCourses = await this.repo.findHomePageCourses();

    if (!homePageCourses || homePageCourses.length === 0) {
      return [];
    }

    const dto: HomePageCoursesDto = homePageCourses.map((item) => ({
      grade: item.grade,
      title: item.title,
      courseCode: item.courseCode,
      coverUrl: item.coverUrl,
      localPath: item.localPath,
      display_order: item.display_order
    }));

    return dto;
  }

  async getHomePageImageSlide(): Promise<HomePageImageSlideDto> {
    console.info(`[getHomePageImageSlide] Lấy homeImageSlides`);

    const homeImageSlide = await this.repo.findHomePageImageSlide();

    if (!homeImageSlide || homeImageSlide.length === 0) {
      return [];
    }

    const dto: HomePageImageSlideDto = homeImageSlide.map((item) => ({
      title: item.title,
      linkUrl: item.linkUrl,
      imageUrl: item.imageUrl,
      subtitle: item.subtitle,
      display_order: item.display_order
    }));

    return dto;
  }

  async getHomePageQAs(): Promise<HomePageQAsDto> {
    console.info(`[getHomePageQAs] Lấy homePageQAs`);

    const homeQAs = await this.repo.findHomePageQAs();

    if (!homeQAs || homeQAs.length === 0) {
      return [];
    }

    const dto: HomePageQAsDto = homeQAs.map((item) => ({
      id: item.id,
      prompt: item.prompt,
      display_order: item.display_order,
      answers: {
        no: {
          title: item.answers.no.title,
          bodyMd: item.answers.no.bodyMd,
          ctaUrl: item.answers.no.ctaUrl,
          ctaText: item.answers.no.ctaText
        },
        yes: {
          title: item.answers.yes.title,
          bodyMd: item.answers.yes.bodyMd,
          ctaUrl: item.answers.yes.ctaUrl,
          ctaText: item.answers.yes.ctaText
        }
      }
    }));

    return dto;
  }
  async getHomePageAchievement(): Promise<HomePageAchievementDto> {
    console.info(`[getHomePageAchievement] Lấy homePageAchievement`);

    // Hàm này trả về 1 HomePageAchievementDto, không phải là 1 mảng
    const homeAchievements = await this.repo.findHomePageAchievement();

    if (!homeAchievements) {
      throw new Error('Không tìm thấy tham số homePageAchievements');
    }

    const dto: HomePageAchievementDto = {
      title: homeAchievements.title,
      intro:  homeAchievements.intro,
      highlights: homeAchievements.highlights,
      note: homeAchievements.note || undefined
    };

    return dto;
  }
}
