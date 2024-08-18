import SubCategory from "../models/subCategory.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Create a sub-category
export const createSubCategory = async (req, res, next) => {
	const {name, image, description, taxApplicability, tax, category} = req.body;
	try {
		const subCategory = new SubCategory({name, image, description, taxApplicability, tax, category});
		await subCategory.save();
		res.status(201).json(subCategory);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all sub-categories
export const getAllSubCategories = async (req, res, next) => {
	try {
		const subCategories = await SubCategory.find();
		res.status(200).json(subCategories);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all sub-categories under a category
export const getSubCategoriesByCategory = async (req, res, next) => {
	const {categoryId} = req.params;
	try {
		const subCategories = await SubCategory.find({category: categoryId});
		res.status(200).json(subCategories);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get sub-category by name or ID
export const getSubCategoryByIdOrName = async (req, res, next) => {
	const {id, name} = req.query;
	try {
		const subCategory = id
			? await SubCategory.findById(id)
			: await SubCategory.findOne({name});
		if (!subCategory) {
			return next(new ErrorHandler("No subcategory found with this id",404));
		}
		res.status(200).json(subCategory);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Edit sub-category attributes
export const editSubCategory = async (req, res, next) => {
	const {id} = req.params;
	const updates = req.body;
	try {
		const subCategory = await SubCategory.findByIdAndUpdate(id, updates, {new: true});
		if (!subCategory) {
			return next(new ErrorHandler("No subcategory found with this id",404));
		}
		res.status(200).json(subCategory);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};