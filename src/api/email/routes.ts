import { Router } from 'express';
import controller from './controller';

const router = Router();

router.post('/forgotpassword', controller.forgotPassword);
router.get('/resetpassword', controller.resetPassword);

export default router;
