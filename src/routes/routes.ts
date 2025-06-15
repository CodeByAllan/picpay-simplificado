import { Router } from 'express';
import userRoutes from './user.routes';
import transferRoutes from './transfer.routes';

const router = Router();
router.use(userRoutes);
router.use(transferRoutes);
export default router;
