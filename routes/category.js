import express from 'express';
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import {
	createCategory,
	editCategory,
	getAllCategories,
	getCategoryByIdOrName
} from '../controllers/categoryController.js';

const router = express.Router();

router.post('/category', catchAsyncErrors(createCategory));
router.get('/categories', catchAsyncErrors(getAllCategories));
router.get('/category', catchAsyncErrors(getCategoryByIdOrName));
router.put('/category/:id', catchAsyncErrors(editCategory));

export default router;
//okay all routes are working fine during the testing