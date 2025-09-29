const products = require('../models/products.models')
const createProduct = async(req, res) => {
    try {
        const product = new products(req.body)
       await product.save()
        res.status(201).send(product)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

const getProducts = async (req, res) => {
    try {
        const allProducts = await products.find();
        res.status(200).json(allProducts)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
    
}

module.exports = { createProduct, getProducts }