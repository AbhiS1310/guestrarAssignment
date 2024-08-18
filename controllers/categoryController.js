import Category from "../models/category.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Create category
export const createCategory = async (req, res, next) => {
	const {name, image, description, taxApplicability, tax, taxType} = req.body;
	try {
		const category = new Category({name, image, description, taxApplicability, tax, taxType});
		await category.save();
		res.status(201).json(category);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all categories
export const getAllCategories = async (req, res, next) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get category by name or ID
export const getCategoryByIdOrName = async (req, res, next) => {
	const {id, name} = req.query;
	try {
		const category = id ? await Category.findById(id) : await Category.findOne({name});
		if (!category) {
			return next(new ErrorHandler('Category not found',400));
		}
		res.status(200).json(category);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};


// Edit category attributes
export const editCategory = async (req, res, next) => {
	const {id} = req.params;
	const updates = req.body;
	try {
		const category = await Category.findByIdAndUpdate(id, updates, {new: true});
		if (!category) {
			return next(new ErrorHandler('Category not found',400));
		}
		res.status(200).json(category);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};
