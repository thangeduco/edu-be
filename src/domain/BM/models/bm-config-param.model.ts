// src/features/BM/model/bm-config-param.model.ts

// =======================
// BmConfigParam (match bảng bm_config_param)
// =======================

export type BMConfigParam = {
  paramId: number;           // map từ cột id (BIGINT)
  paramKey: string;     // map từ cột param_key
  paramValue: any;      // map từ cột param_value (JSONB)
  paramDesc?: string | null; // map từ cột param_desc
  status: number;     // map từ cột is_active (Y/N hoặc kiểu khác do anh quy ước)
  createdAt: Date;      // map từ cột created_at
  updatedAt: Date;      // map từ cột updated_at
};

export type HomePageImageItem = {
  title: string;
  linkUrl: string;
  imageUrl: string;
  subtitle?: string;
  display_order: number;
};
export type HomePageImageSlide = HomePageImageItem[];



export function parseHomePageImageSlide(input: any): HomePageImageSlide {
  if (!Array.isArray(input)) throw new Error('home_image_slides must be an array');
  return input.map((it, idx) => {
    assertObject(it, `home_image_slides[${idx}] must be an object`);
    const { title, linkUrl, imageUrl, subtitle, display_order } = it;
    assertString(title, `title[${idx}] is required`);
    assertString(linkUrl, `linkUrl[${idx}] is required`);
    assertString(imageUrl, `imageUrl[${idx}] is required`);
    if (!(subtitle === undefined || typeof subtitle === 'string')) {
      throw new Error(`subtitle[${idx}] must be string if present`);
    }
    assertInteger(display_order, `display_order[${idx}] must be integer`);
    return { title, linkUrl, imageUrl, subtitle, display_order };
  });
}


export type HomePageQAAnswer = {
  title: string;
  bodyMd: string;
  ctaUrl: string;
  ctaText: string;
};

export type HomePageQAItem = {
  id: string;
  prompt: string;
  answers: {
    no: HomePageQAAnswer;
    yes: HomePageQAAnswer;
  };
  display_order: number;
};
export type HomePageQAs = HomePageQAItem[];


export function parseHomePageQAs(input: any): HomePageQAs {
  if (!Array.isArray(input)) throw new Error('home_qas must be an array');
  return input.map((it, idx) => {
    assertObject(it, `home_qas[${idx}] must be an object`);
    const { id, prompt, answers, display_order } = it;
    assertString(id, `id[${idx}] is required`);
    assertString(prompt, `prompt[${idx}] is required`);
    assertObject(answers, `answers[${idx}] must be an object`);

    const { no, yes } = answers;
    assertObject(no, `answers.no[${idx}] must be an object`);
    assertObject(yes, `answers.yes[${idx}] must be an object`);

    const parseAns = (a: any, label: 'no' | 'yes'): HomePageQAAnswer => {
      const { title, bodyMd, ctaUrl, ctaText } = a ?? {};
      assertString(title, `answers.${label}.title[${idx}] is required`);
      assertString(bodyMd, `answers.${label}.bodyMd[${idx}] is required`);
      assertString(ctaUrl, `answers.${label}.ctaUrl[${idx}] is required`);
      assertString(ctaText, `answers.${label}.ctaText[${idx}] is required`);
      return { title, bodyMd, ctaUrl, ctaText };
    };

    assertInteger(display_order, `display_order[${idx}] must be integer`);
    return { id, prompt, answers: { no: parseAns(no, 'no'), yes: parseAns(yes, 'yes') }, display_order };
  });
}



export type HomePageCourseItem = {
  grade: number;
  title: string;
  courseCode: string;
  coverUrl: string;
  localPath: string | null;
  display_order: number;
};
export type HomePageCourses = HomePageCourseItem[];
export function parseHomePageCourses(input: any): HomePageCourses {
  if (!Array.isArray(input)) throw new Error('home_courses must be an array');
  return input.map((it, idx) => {
    assertObject(it, `home_courses[${idx}] must be an object`);
    const { grade, title, courseCode, coverUrl, localPath, display_order } = it;
    assertInteger(grade, `grade[${idx}] must be integer`);
    assertString(title, `title[${idx}] is required`);
    assertString(courseCode, `courseCode[${idx}] is required`);
    if (!(localPath === null || typeof localPath === 'string')) {
      throw new Error(`localPath[${idx}] must be string or null`);
    }
    assertInteger(display_order, `display_order[${idx}] must be integer`);
    return { grade, title, courseCode, coverUrl, localPath, display_order };
  });
}

export type HomePageAchievement = {
  title: string;           // Tiêu đề phần thành tựu ("Thành tựu của Educo")
  intro: string;           // Đoạn mô tả mở đầu
  highlights: string[];    // Danh sách bullet-point thành tựu
  note?: string;           // Ghi chú nhỏ (không bắt buộc)
}

export function parseHomePageAchievement(input: any): HomePageAchievement {
  assertObject(input, 'home_achievement must be an object');
  const { title, intro, highlights, note } = input;
  assertString(title, 'title is required');
  assertString(intro, 'intro is required');
  if (!Array.isArray(highlights) || !highlights.every(it => typeof it === 'string')) {
    throw new Error('highlights must be an array of strings');
  }
  if (!(note === undefined || typeof note === 'string')) {
    throw new Error('note must be string if present');
  }
  return { title, intro, highlights, note };
}
  



function safeJsonParse<T = any>(text: string, fallback: T): T {
  try { return JSON.parse(text) as T; } catch { return fallback; }
}

function assertObject(val: any, msg: string): asserts val is Record<string, any> {
  if (typeof val !== 'object' || val === null || Array.isArray(val)) throw new Error(msg);
}

function assertString(val: any, msg: string): asserts val is string {
  if (typeof val !== 'string' || val.length === 0) throw new Error(msg);
}

function assertInteger(val: any, msg: string): asserts val is number {
  if (!Number.isInteger(val)) throw new Error(msg);
}
