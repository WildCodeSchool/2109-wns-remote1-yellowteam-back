import { Router } from 'express';
import controllers from './controller';

const router = Router();

router.get('/', controllers.getAll);

export default router;
