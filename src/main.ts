import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import bmRouter from './interfaces/routes/bm.routes';
import  cmRouter  from './interfaces/routes/cm.routes';
import  imRouter  from './interfaces/routes/im.routes';
import  lmRouter  from './interfaces/routes/lm.routes';

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'edu-be' });
});

app.use('/api/bm', bmRouter);
app.use('/api/cm', cmRouter);
app.use('/api/im', imRouter);
app.use('/api/lm', lmRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`edu-be running on port ${PORT}`);
});