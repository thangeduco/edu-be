// routes/index.ts
// Helper để mount tất cả routers theo prefix

import { Router } from 'express';
import bmRouter from './bm.routes';
import cmRouter from './cm.routes';
import imRouter from './im.routes';
import lmRouter from './lm.routes';

const rootRouter = Router();

rootRouter.use('/bm', bmRouter);
rootRouter.use('/cm', cmRouter);
rootRouter.use('/im', imRouter);
rootRouter.use('/lm', lmRouter);

export default rootRouter;
