import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { checkSession } from '../middleware/checkSession.js';

const router = express.Router();

router.get('/products', checkSession, getProducts);

export default router;