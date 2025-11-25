"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const bm_routes_1 = __importDefault(require("./interfaces/routes/bm.routes"));
const cm_routes_1 = __importDefault(require("./interfaces/routes/cm.routes"));
const im_routes_1 = __importDefault(require("./interfaces/routes/im.routes"));
const lm_routes_1 = __importDefault(require("./interfaces/routes/lm.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3100;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'edu-be' });
});
app.use('/api/bm', bm_routes_1.default);
app.use('/api/cm', cm_routes_1.default);
app.use('/api/im', im_routes_1.default);
app.use('/api/lm', lm_routes_1.default);
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.listen(PORT, () => {
    console.log(`edu-be running on port ${PORT}`);
});
