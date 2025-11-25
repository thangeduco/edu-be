// src/domain/BM/repos/bm-config-param.repo.ts

import {
  HomePageAchievement,
  HomePageImageSlide,
  HomePageCourses,
  HomePageQAs,
} from '../models/bm-config-param.model';

/**
 * Repository interface cho bm_config_param
 * - Có 1 hàm nền findByTenantAndParamType(...)
 * - Và các hàm tiện ích đã typed cho từng param_type
 */
export interface IBMConfigParamRepo {
  // //////////////////////// CONFIG FOR HOME PAGE start/////////////////////////////////////////////


  /** home_courses */
  findHomePageCourses(): Promise<HomePageCourses | null>;

  /** home_image_slides */
  findHomePageImageSlide(): Promise<HomePageImageSlide | null>;

  /** home_qas */
  findHomePageQAs(): Promise<HomePageQAs | null>;

  findHomePageAchievement(): Promise<HomePageAchievement | null>;

 // //////////////////////// CONFIG FOR HOME PAGE end/////////////////////////////////////////////
}
