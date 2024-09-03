const categoryModel = require('../models/ProductCategoryModel');

const createCategory = async (req, res) => {
    try {
        const createdCategory = await categoryModel.create(req.body);
        res.status(201).json({
            message: "Category created successfully",
            data: createdCategory,
        })
    } catch (err) {
        res.status(500).json({
            message: "Error: Cannot create category",
        })
    }
}

module.exports = {
    createCategory,
} 