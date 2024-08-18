import Item from '../models/items.js'
import ErrorHandler from '../utils/ErrorHandler.js';

export const createItem = async (req, res, next) => {
	const {name, image, description, taxApplicability, tax, baseAmount, discount, subCategory, category} = req.body;
	try {
		const item = new Item({
			name,
			image,
			description,
			taxApplicability,
			tax,
			baseAmount,
			discount,
			subCategory,
			category
		});
		await item.save();
		res.status(201).json(item);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all items
export const getAllItems = async (req, res, next) => {
	try {
		const items = await Item.find();
		res.status(200).json(items);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all items under a category
export const getItemsByCategory = async (req, res, next) => {
	const {id} = req.params;
	try {
		const items = await Item.find({category: id});
		res.status(200).json(items);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get all items under a sub-category
export const getItemsBySubCategory = async (req, res, next) => {
	const {id} = req.params;
	try {
		const items = await Item.find({subCategory: id});
		res.status(200).json(items);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Get item by name or ID
export const getItemByIdOrName = async (req, res, next) => {
	const {id, name} = req.query;
	try {
		const item = id
			? await Item.findById(id)
			: await Item.findOne({name});
		if (!item) {
			return next(new ErrorHandler("No item is found",404));
		}
		res.status(200).json(item);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Edit item attributes
export const editItem = async (req, res, next) => {
	const {id} = req.params;
	const updates = req.body;
	try {
		const item = await Item.findByIdAndUpdate(id, updates, {new: true});
		if (!item) {
			return next(new ErrorHandler("No item is found",404));
		}
		res.status(200).json(item);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};

// Search item by name
export const searchItemByName = async (req, res, next) => {
	const {name} = req.query;
	try {
		const items = await Item.find({name: {$regex: name, $options: 'i'}});
		res.status(200).json(items);
	} catch (error) {
		return next(new ErrorHandler(error.message,400));
	}
};