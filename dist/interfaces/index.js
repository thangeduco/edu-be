"use strict";
// src/interfaces/index.ts
// Re-export controllers & routes
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoutes = exports.lmRoutes = exports.imRoutes = exports.cmRoutes = exports.bmRoutes = exports.LMControllers = exports.IMControllers = exports.CMControllers = exports.BMControllers = void 0;
exports.BMControllers = __importStar(require("./controllers/BM"));
exports.CMControllers = __importStar(require("./controllers/CM"));
exports.IMControllers = __importStar(require("./controllers/IM"));
exports.LMControllers = __importStar(require("./controllers/LM"));
var bm_routes_1 = require("./routes/bm.routes");
Object.defineProperty(exports, "bmRoutes", { enumerable: true, get: function () { return __importDefault(bm_routes_1).default; } });
var cm_routes_1 = require("./routes/cm.routes");
Object.defineProperty(exports, "cmRoutes", { enumerable: true, get: function () { return __importDefault(cm_routes_1).default; } });
var im_routes_1 = require("./routes/im.routes");
Object.defineProperty(exports, "imRoutes", { enumerable: true, get: function () { return __importDefault(im_routes_1).default; } });
var lm_routes_1 = require("./routes/lm.routes");
Object.defineProperty(exports, "lmRoutes", { enumerable: true, get: function () { return __importDefault(lm_routes_1).default; } });
var index_1 = require("./routes/index");
Object.defineProperty(exports, "rootRoutes", { enumerable: true, get: function () { return __importDefault(index_1).default; } });
