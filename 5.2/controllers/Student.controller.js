const products = require('../models/products.models');

// Create product
const createProduct = async (req, res) => {
    try {
        const product = new products(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get one product by ID
const getProductById = async (req, res) => {
    try {
        const product = await products.findById(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update product by ID
const updateProduct = async (req, res) => {
    try {
        const product = await products.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Product deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = { 
    createProduct, 
    getProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
};