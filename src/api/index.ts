import { Router } from 'express';
import email from './email/routes';

const router = Router();

router.use('/email', email);

export default router;
