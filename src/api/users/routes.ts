import { Router } from 'express';
import controllers from './controller';

const router = Router();

router.get('/', controllers.getAll);
router.get('/:id', controllers.getOne);

export default router;
