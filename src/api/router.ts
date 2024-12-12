import express, { Request, Response } from 'express';
import authRoute from './auth/auth.route';

const router = express.Router();

router.use('/auth', authRoute);

export default router;
