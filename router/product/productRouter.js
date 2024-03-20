const express=require('express');
const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require('../../controller/product/productController');
const productRouter=express.Router();
//Get All Products
productRouter.get('/',getAllProducts);
//Get Product By ID
productRouter.get('/:productId', getProductById);
//Create Product
productRouter.post('/', createProduct);
//Update Product
productRouter.put('/:productId',updateProductById);
//Delete Product By ID
productRouter.delete('/:productId',deleteProductById);

module.exports=productRouter;