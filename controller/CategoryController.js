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

const getAllCategory = async (req, res)=> {
    try {
        const categories = await categoryModel.find();
        res.status(200).json({
            message: "Category list",
            data: categories
        })
    } catch (err) {
        res.status(500).json({
            message: "Error in fetching category",
        })
    }
}

module.exports = {
    createCategory,
    getAllCategory
} 