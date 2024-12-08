import path from 'path';
import dotenv from 'dotenv-safe';

dotenv.config({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example'),
});

export const PORT: number = parseInt(process.env.PORT, 10);
export const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';
export const LOG_OUTPUT_JSON: boolean = process.env.LOG_OUTPUT_JSON === '1';
export const NODE_ENV: string = process.env.NODE_ENV || 'development';