import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import controller from './controller';

const router = Router();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/forgotpassword', limiter, controller.forgotPassword);
router.post('/resetpassword', limiter, controller.resetPassword);

export default router;
