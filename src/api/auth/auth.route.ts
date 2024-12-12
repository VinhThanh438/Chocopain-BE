import express from 'express';
import { validate } from 'express-validation';
import { signup } from './auth.validator';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post('/signup', validate(signup, { context: true }), AuthController.signup);

export default router;