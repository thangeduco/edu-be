// src/interfaces/index.ts
// Re-export controllers & routes

export * as BMControllers from './controllers/BM';
export * as CMControllers from './controllers/CM';
export * as IMControllers from './controllers/IM';
export * as LMControllers from './controllers/LM';

export { default as bmRoutes } from './routes/bm.routes';
export { default as cmRoutes } from './routes/cm.routes';
export { default as imRoutes } from './routes/im.routes';
export { default as lmRoutes } from './routes/lm.routes';
export { default as rootRoutes } from './routes/index';
