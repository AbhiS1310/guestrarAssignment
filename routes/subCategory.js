import express from 'express';
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import {
	createSubCategory,
	editSubCategory,
	getAllSubCategories,
	getSubCategoriesByCategory,
	getSubCategoryByIdOrName
} from '../controllers/subCategoryController.js';

const router = express.Router();

router.post('/subcategory', catchAsyncErrors(createSubCategory));
router.get('/subcategories', catchAsyncErrors(getAllSubCategories));
router.get('/subcategories/:categoryId', catchAsyncErrors(getSubCategoriesByCategory));
router.get('/subcategory', catchAsyncErrors(getSubCategoryByIdOrName));
router.put('/subcategory/:id', catchAsyncErrors(editSubCategory));

export default router;

//all apis are working fine here too