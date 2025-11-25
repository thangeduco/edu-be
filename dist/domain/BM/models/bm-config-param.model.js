"use strict";
// src/features/BM/model/bm-config-param.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHomePageImageSlide = parseHomePageImageSlide;
exports.parseHomePageQAs = parseHomePageQAs;
exports.parseHomePageCourses = parseHomePageCourses;
exports.parseHomePageAchievement = parseHomePageAchievement;
function parseHomePageImageSlide(input) {
    if (!Array.isArray(input))
        throw new Error('home_image_slides must be an array');
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
function parseHomePageQAs(input) {
    if (!Array.isArray(input))
        throw new Error('home_qas must be an array');
    return input.map((it, idx) => {
        assertObject(it, `home_qas[${idx}] must be an object`);
        const { id, prompt, answers, display_order } = it;
        assertString(id, `id[${idx}] is required`);
        assertString(prompt, `prompt[${idx}] is required`);
        assertObject(answers, `answers[${idx}] must be an object`);
        const { no, yes } = answers;
        assertObject(no, `answers.no[${idx}] must be an object`);
        assertObject(yes, `answers.yes[${idx}] must be an object`);
        const parseAns = (a, label) => {
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
function parseHomePageCourses(input) {
    if (!Array.isArray(input))
        throw new Error('home_courses must be an array');
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
function parseHomePageAchievement(input) {
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
function safeJsonParse(text, fallback) {
    try {
        return JSON.parse(text);
    }
    catch {
        return fallback;
    }
}
function assertObject(val, msg) {
    if (typeof val !== 'object' || val === null || Array.isArray(val))
        throw new Error(msg);
}
function assertString(val, msg) {
    if (typeof val !== 'string' || val.length === 0)
        throw new Error(msg);
}
function assertInteger(val, msg) {
    if (!Number.isInteger(val))
        throw new Error(msg);
}
