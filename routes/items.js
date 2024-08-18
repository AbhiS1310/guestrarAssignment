import express from 'express';
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import {
	createItem,
	editItem,
	getAllItems,
	getItemByIdOrName,
	getItemsByCategory,
	getItemsBySubCategory,
	searchItemByName
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/item', catchAsyncErrors(createItem));
router.get('/items', catchAsyncErrors(getAllItems));
router.get('/items/by-category/:id', catchAsyncErrors(getItemsByCategory));
router.get('/items/by-subcategory/:id', catchAsyncErrors(getItemsBySubCategory));
router.get('/item', catchAsyncErrors(getItemByIdOrName));
router.put('/item/:id', catchAsyncErrors(editItem));
router.get('/items/search', catchAsyncErrors(searchItemByName));


export default router;
