import mongoose from "mongoose";
import category from "./category.js";

const subCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	taxApplicability: {
		type: Boolean,
		default: false
	},
	tax: {
		type: Number,
		default: 0
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	}
}, {timestamps: true});

// Pre-save hook to set default taxApplicability and tax based on the parent category
subCategorySchema.pre('save', async function (next) {
	if (this.isNew) {
		try {
			const cat = await category.findById(this.category);
			if (cat) {
				this.taxApplicability = cat.taxApplicability;
				this.tax = cat.tax;
			}
		} catch (error) {
			return next(error);
		}
	}
	next();
});

const subCategory = mongoose.model('SubCategory', subCategorySchema);

export default subCategory;