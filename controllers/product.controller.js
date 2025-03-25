const Product = require('../models/product.model');

const saveProduct = async (req, res) => {
    
    try {
           const product = await Product.create(req.body);
           res.status(200).json(product);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
}

const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message : 'Product not fount'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productToBeDeleted = await Product.findById(id);
        if(productToBeDeleted){
            await Product.findByIdAndDelete(id);
        } else{
            return res.status(404).json({message : "Product not found"});
        }

        res.status(200).json({message:"Successfully deleted"});

    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    saveProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProduct
}