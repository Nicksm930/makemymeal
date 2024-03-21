const Product=require('../../model/product/product')
require('../../config/dbConnect');
const multer = require('multer');

//Get All Products
exports.getAllProducts=async(req,res)=>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//Get Product By ID
exports.getProductById=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//Create Product
exports.createProduct= async(req,res)=>{
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
      
}
//Update Product
exports.updateProductById=async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//Delete Product By ID
exports.deleteProductById=async(req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
        if (deletedProduct) {
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
