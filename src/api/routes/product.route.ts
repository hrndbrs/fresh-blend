import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

router.get('/', ProductController.getList);
router.get('/popular', ProductController.getPopular);
router.get('/:id', ProductController.getDetail);
router.post('/:id/vote', ProductController.upvote);

export default router;
