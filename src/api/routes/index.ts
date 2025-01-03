import { Router } from 'express';
import productRoutes from './product.route';
import errorHandler from '../middlewares/error-handler.middleware';

const router = Router();

router.use('/products', productRoutes);

router.use(errorHandler);

export default router;
