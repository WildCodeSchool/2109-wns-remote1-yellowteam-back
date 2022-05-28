import validator from '../../middlewares/expressBodyValidator';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import controller from './controller';
import validators from '../../utils/validators';

const router = Router();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/forgotpassword', limiter, controller.forgotPassword);
router.post(
  '/resetpassword',
  validator(validators.resetPasswordValidator),
  limiter,
  controller.resetPassword
);
router.post('/verifycaptcha', limiter, controller.verifyCaptcha);

export default router;
