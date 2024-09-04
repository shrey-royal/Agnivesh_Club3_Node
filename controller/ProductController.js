const productModel = require('../models/ProductModel');

const createProduct = async (req, res) => {
    try {
        const createdProduct = await productModel.create(req.body);
        res.status(201).json({
            message: "Product created successfully",
            data: createdProduct,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error in creating product",
        })
    }
}

const getAllProducts = async (req, res)=> {
    try {
        const products = await productModel.find({status: true}).populate('category');
        res.status(200).json({
            message: "Products list",
            data: products
        })
    } catch (err) {
        res.status(500).json({
            message: "Error in fetching products",
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts
}