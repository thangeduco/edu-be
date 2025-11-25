"use strict";
// routes/index.ts
// Helper để mount tất cả routers theo prefix
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bm_routes_1 = __importDefault(require("./bm.routes"));
const cm_routes_1 = __importDefault(require("./cm.routes"));
const im_routes_1 = __importDefault(require("./im.routes"));
const lm_routes_1 = __importDefault(require("./lm.routes"));
const rootRouter = (0, express_1.Router)();
rootRouter.use('/bm', bm_routes_1.default);
rootRouter.use('/cm', cm_routes_1.default);
rootRouter.use('/im', im_routes_1.default);
rootRouter.use('/lm', lm_routes_1.default);
exports.default = rootRouter;
