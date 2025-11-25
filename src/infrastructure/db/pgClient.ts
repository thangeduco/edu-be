// src/infrastructure/db/index.ts

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pgPool.on('connect', () => {
  console.log('📦 Connected to PostgreSQL database');
});

pgPool.on('error', (err: Error) => {
  console.error(' Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});
