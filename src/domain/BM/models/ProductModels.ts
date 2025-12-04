// ======================================================
// ProductModels.ts
// Domain models + SaleKit & SaleTerms parser
// ======================================================

/**
 * BmProduct: mapping 1-1 với bảng bm_products
 */
export interface BmProduct {
  productId: number;
  productCode: string;
  productName: string;
  productType: string;
  description?: string;
  price: number;
  currency: string;
  billingCycle?: string;
  isActive: boolean;
  trialDays?: number;
  createdAt: Date;
  updatedAt: Date;

  /**
   * saleKit lấy từ database:
   * - kiểu JSONB → Node sẽ nhận thành object
   * - hoặc string JSON
   */
  saleKit: any | null;

  /**
   * saleTerms lấy từ database (cột sale_terms):
   * - kiểu JSONB → Node sẽ nhận thành object
   * - hoặc string JSON
   * Dùng để hiển thị thông tin quyền lợi, hỗ trợ trực tuyến trên SubscriptionPage.
   */
  saleTerms: any | null;
}

/**
 * BmSubscription: mapping 1-1 với bảng bm_subscriptions
 */
export interface BmSubscription {
  id: number;

  /**
   * ID học sinh (bm_users.id) → cột student_id
   */
  studentId: number;

  /**
   * ID sản phẩm (bm_products.id) → cột product_id
   */
  productId: number;

  /**
   * TRIAL, ACTIVE, EXPIRED, CANCELED, BLOCKED,...
   */
  status: string;

  /**
   * Thời điểm bắt đầu dùng thử → trial_start_at
   */
  trialStartAt?: Date;

  /**
   * Thời điểm kết thúc dùng thử → trial_end_at
   */
  trialEndAt?: Date;

  /**
   * Thời điểm bắt đầu gói chính thức → start_at
   */
  startAt?: Date;

  /**
   * Thời điểm hết hạn gói → end_at
   */
  endAt?: Date;

  /**
   * Tự động gia hạn hay không → auto_renew
   */
  autoRenew: boolean;

  /**
   * Lý do chặn dịch vụ nếu có → blocked_reason
   */
  blockedReason?: string | null;

  /**
   * Thời điểm tạo → created_at
   */
  createdAt: Date;

  /**
   * Thời điểm cập nhật → updated_at
   */
  updatedAt: Date;
}

// ======================================================
// ProductSaleKit domain models
// ======================================================

export interface ProductSaleKitSectionBase {
  imageUrl: string;
  title: string;
  highlights: string[];
  inspirationalQuote: string;
}

export interface ProductSaleKitSectionWithGuide
  extends ProductSaleKitSectionBase {
  guideUrl: string;
}

export interface ProductSaleKitSuccessStory {
  id: string;
  avatarUrl: string;
  storyTitle: string;
  storyContent: string;
}

export interface ProductSaleKit {
  version: number;
  learningSection: ProductSaleKitSectionBase;
  parentSupportSection: ProductSaleKitSectionWithGuide;
  pricingSection: ProductSaleKitSectionWithGuide;
  successStories: ProductSaleKitSuccessStory[];
}

// ======================================================
// ProductSaleTerms domain models (sale_terms JSONB)
// ======================================================

export interface ProductSaleTermsBenefits {
  title: string;
  shortDescription: string[]; // chuẩn hóa thành array cho FE
  detailedUrl: string;
}

export interface ProductSaleTermsSupport {
  title: string;
  chatLabel: string;
  chatUrl: string;
  zaloCskh: string;
  zaloTeacher: string;
  zaloCeo: string;
}

export interface ProductSaleTerms {
  benefits: ProductSaleTermsBenefits;
  support: ProductSaleTermsSupport;
}

// ======================================================
// PARSER: parseProductSaleKitFlexible()
// ======================================================

/**
 * Parse linh hoạt:
 * - Nhận JSONB (object)
 * - Nhận JSON string
 * - Tự động convert snake_case → camelCase
 * - Kiểm tra required fields
 */
export function parseProductSaleKitFlexible(
  input: any
): ProductSaleKit | null {
  if (!input) return null;

  let obj = input;

  // Nếu là string JSON → parse
  if (typeof input === "string") {
    try {
      obj = JSON.parse(input);
    } catch {
      throw new Error("sale_kit must be valid JSON object string");
    }
  }

  assertObject(obj, "sale_kit must be an object");

  const version = obj.version;
  assertInteger(version, "sale_kit.version must be integer");

  const learningRaw = obj.learningSection ?? obj.learning_section;
  const parentSupportRaw =
    obj.parentSupportSection ?? obj.parent_support_section;
  const pricingRaw = obj.pricingSection ?? obj.pricing_section;
  const storiesRaw = obj.successStories ?? obj.success_stories;

  const learningSection = parseSaleKitSectionBaseFromSnake(
    learningRaw,
    "sale_kit.learning_section"
  );
  const parentSupportSection = parseSaleKitSectionWithGuideFromSnake(
    parentSupportRaw,
    "sale_kit.parent_support_section"
  );
  const pricingSection = parseSaleKitSectionWithGuideFromSnake(
    pricingRaw,
    "sale_kit.pricing_section"
  );
  const successStories = parseSaleKitSuccessStoriesFromSnake(
    storiesRaw,
    "sale_kit.success_stories"
  );

  return {
    version,
    learningSection,
    parentSupportSection,
    pricingSection,
    successStories,
  };
}

/**
 * Hàm tương thích ngược với code cũ
 * Code cũ đang gọi parseProductSaleKitFromString()
 */
export function parseProductSaleKitFromString(
  raw: any
): ProductSaleKit | null {
  return parseProductSaleKitFlexible(raw);
}

// ======================================================
// PARSER: parseProductSaleTermsFlexible() – cho cột sale_terms
// ======================================================

/**
 * Parse linh hoạt:
 * - Nhận JSONB (object) hoặc JSON string
 * - Hỗ trợ snake_case & camelCase cho các field
 *
 * Cấu trúc kỳ vọng (DB hiện tại):
 * {
 *   "benefits": {
 *     "title": "Quyền lợi học sinh & phụ huynh",
 *     "shortDescription": [
 *       "Học sinh được học video bám sát chương trình, bài tập tương tác",
 *       "Phụ huynh theo dõi tiến độ và nhận gợi ý hỗ trợ theo tuần",
 *       "Báo cáo học tập chi tiết từng chủ đề"
 *     ],
 *     "detailedUrl": "https://cdn.educo.vn/docs/benefits-math7a.pdf"
 *   },
 *   "support": {
 *     "title": "Hỗ trợ trực tuyến",
 *     "chatLabel": "Chat với Educo",
 *     "chatUrl": "https://zalo.me/educo",
 *     "zaloCskh": "0987 654 321",
 *     "zaloTeacher": "0912 345 678",
 *     "zaloCeo": "0903 222 111"
 *   }
 * }
 *
 * Đồng thời support backward-compat nếu shortDescription là string.
 */
export function parseProductSaleTermsFlexible(
  input: any
): ProductSaleTerms | null {
  if (!input) return null;

  let obj = input;

  // Nếu là string JSON → parse
  if (typeof input === "string") {
    try {
      obj = JSON.parse(input);
    } catch {
      throw new Error("sale_terms must be valid JSON object string");
    }
  }

  assertObject(obj, "sale_terms must be an object");

  const benefitsRaw = obj.benefits ?? obj.benefits_section;
  const supportRaw = obj.support ?? obj.support_section;

  const benefits = parseSaleTermsBenefitsFromSnake(
    benefitsRaw,
    "sale_terms.benefits"
  );
  const support = parseSaleTermsSupportFromSnake(
    supportRaw,
    "sale_terms.support"
  );

  return {
    benefits,
    support,
  };
}

// ======================================================
// INTERNAL PARSER HELPERS – SALE KIT
// ======================================================

function parseSaleKitSectionBaseFromSnake(
  input: any,
  path: string
): ProductSaleKitSectionBase {
  assertObject(input, `${path} must be an object`);

  const imageUrl = input.imageUrl ?? input.image_url;
  const title = input.title;
  const highlights = input.highlights;
  const inspirationalQuote =
    input.inspirationalQuote ?? input.inspirational_quote;

  assertString(imageUrl, `${path}.imageUrl is required`);
  assertString(title, `${path}.title is required`);

  if (
    !Array.isArray(highlights) ||
    !highlights.every((h) => typeof h === "string")
  ) {
    throw new Error(`${path}.highlights must be array of strings`);
  }

  assertString(inspirationalQuote, `${path}.inspirationalQuote is required`);

  return {
    imageUrl,
    title,
    highlights,
    inspirationalQuote,
  };
}

function parseSaleKitSectionWithGuideFromSnake(
  input: any,
  path: string
): ProductSaleKitSectionWithGuide {
  const base = parseSaleKitSectionBaseFromSnake(input, path);
  const guideUrl = input.guideUrl ?? input.guide_url;
  assertString(guideUrl, `${path}.guideUrl is required`);
  return { ...base, guideUrl };
}

function parseSaleKitSuccessStoriesFromSnake(
  input: any,
  path: string
): ProductSaleKitSuccessStory[] {
  if (!Array.isArray(input)) {
    throw new Error(`${path} must be an array`);
  }

  return input.map((item, idx) => {
    const p = `${path}[${idx}]`;
    assertObject(item, `${p} must be an object`);

    const id = item.id;
    const avatarUrl = item.avatarUrl ?? item.avatar_url;
    const storyTitle = item.storyTitle ?? item.story_title;
    const storyContent = item.storyContent ?? item.story_content;

    assertString(id, `${p}.id is required`);
    assertString(avatarUrl, `${p}.avatarUrl is required`);
    assertString(storyTitle, `${p}.storyTitle is required`);
    assertString(storyContent, `${p}.storyContent is required`);

    return {
      id,
      avatarUrl,
      storyTitle,
      storyContent,
    };
  });
}

// ======================================================
// INTERNAL PARSER HELPERS – SALE TERMS
// ======================================================

function parseSaleTermsBenefitsFromSnake(
  input: any,
  path: string
): ProductSaleTermsBenefits {
  assertObject(input, `${path} must be an object`);

  const title = input.title;
  const rawShortDescription =
    input.shortDescription ?? input.short_description;
  const detailedUrl = input.detailedUrl ?? input.detailed_url;

  assertString(title, `${path}.title is required`);
  assertString(detailedUrl, `${path}.detailedUrl is required`);

  let shortDescription: string[];

  // BACKWARD-COMPAT:
  // - Nếu là string => wrap thành [string]
  // - Nếu là array => validate từng phần tử là string
  // - Nếu null/undefined => cho phép mảng rỗng (hoặc anh có thể siết lại sau)
  if (typeof rawShortDescription === "string") {
    shortDescription = [rawShortDescription];
  } else if (Array.isArray(rawShortDescription)) {
    if (!rawShortDescription.every((x) => typeof x === "string")) {
      throw new Error(`${path}.shortDescription must be an array of strings`);
    }
    shortDescription = rawShortDescription;
  } else if (rawShortDescription == null) {
    shortDescription = [];
  } else {
    throw new Error(
      `${path}.shortDescription must be string or array of strings`
    );
  }

  return {
    title,
    shortDescription,
    detailedUrl,
  };
}

function parseSaleTermsSupportFromSnake(
  input: any,
  path: string
): ProductSaleTermsSupport {
  assertObject(input, `${path} must be an object`);

  const title = input.title;
  const chatLabel = input.chatLabel ?? input.chat_label;
  const chatUrl = input.chatUrl ?? input.chat_url;

  const zaloCskh =
    input.zaloCskh ?? input.zalo_cskh ?? input.zaloCSKH;
  const zaloTeacher =
    input.zaloTeacher ?? input.zalo_teacher ?? input.zaloTeacherPhone;
  const zaloCeo =
    input.zaloCeo ?? input.zalo_ceo ?? input.zaloCeoPhone;

  assertString(title, `${path}.title is required`);
  assertString(chatLabel, `${path}.chatLabel is required`);
  assertString(chatUrl, `${path}.chatUrl is required`);
  assertString(zaloCskh, `${path}.zaloCskh is required`);
  assertString(zaloTeacher, `${path}.zaloTeacher is required`);
  assertString(zaloCeo, `${path}.zaloCeo is required`);

  return {
    title,
    chatLabel,
    chatUrl,
    zaloCskh,
    zaloTeacher,
    zaloCeo,
  };
}

// ======================================================
// ASSERT HELPERS
// ======================================================

function assertObject(
  val: any,
  msg: string
): asserts val is Record<string, any> {
  if (typeof val !== "object" || val === null || Array.isArray(val)) {
    throw new Error(msg);
  }
}

function assertString(val: any, msg: string): asserts val is string {
  if (typeof val !== "string" || val.length === 0) {
    throw new Error(msg);
  }
}

function assertInteger(val: any, msg: string): asserts val is number {
  if (!Number.isInteger(val)) {
    throw new Error(msg);
  }
}
