import { Router } from 'express';
import services from './services/routes';

const router = Router();

router.use('/services', services);

export default router;
