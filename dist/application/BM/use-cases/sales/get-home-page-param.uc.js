"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHomePageParamUC = void 0;
/**
 * Use Case: GetHomePageParamUC
 * Lấy toàn bộ cấu hình trang chủ của 1 tenant.
 */
class GetHomePageParamUC {
    constructor(repo) {
        this.repo = repo;
    }
    async getHomePageCourses() {
        console.info(`[getHomePageCourses] Lấy homePageCourses`);
        const homePageCourses = await this.repo.findHomePageCourses();
        if (!homePageCourses || homePageCourses.length === 0) {
            return [];
        }
        const dto = homePageCourses.map((item) => ({
            grade: item.grade,
            title: item.title,
            courseCode: item.courseCode,
            coverUrl: item.coverUrl,
            localPath: item.localPath,
            display_order: item.display_order
        }));
        return dto;
    }
    async getHomePageImageSlide() {
        console.info(`[getHomePageImageSlide] Lấy homeImageSlides`);
        const homeImageSlide = await this.repo.findHomePageImageSlide();
        if (!homeImageSlide || homeImageSlide.length === 0) {
            return [];
        }
        const dto = homeImageSlide.map((item) => ({
            title: item.title,
            linkUrl: item.linkUrl,
            imageUrl: item.imageUrl,
            subtitle: item.subtitle,
            display_order: item.display_order
        }));
        return dto;
    }
    async getHomePageQAs() {
        console.info(`[getHomePageQAs] Lấy homePageQAs`);
        const homeQAs = await this.repo.findHomePageQAs();
        if (!homeQAs || homeQAs.length === 0) {
            return [];
        }
        const dto = homeQAs.map((item) => ({
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
    async getHomePageAchievement() {
        console.info(`[getHomePageAchievement] Lấy homePageAchievement`);
        // Hàm này trả về 1 HomePageAchievementDto, không phải là 1 mảng
        const homeAchievements = await this.repo.findHomePageAchievement();
        if (!homeAchievements) {
            throw new Error('Không tìm thấy tham số homePageAchievements');
        }
        const dto = {
            title: homeAchievements.title,
            intro: homeAchievements.intro,
            highlights: homeAchievements.highlights,
            note: homeAchievements.note || undefined
        };
        return dto;
    }
}
exports.GetHomePageParamUC = GetHomePageParamUC;
