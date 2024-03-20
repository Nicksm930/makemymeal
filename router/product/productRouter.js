const express=require('express');
const productRouter=express.Router();
//Get All Products
productRouter.get('/',(req,res)=>{
    try {
        res.status(201).json({
            status:"success",
            data:"Display all Products"
        })
    } catch (error) {
        
    }
});
//Get Product By ID
productRouter.get('/:productId', (req,res)=>{
    try {
        res.status(201).json({
            status:"success",
            data:"Get Product By ID"
        })
        // console.log("In getProductById");
    } catch (error) {
        
    }
});
//Create Product
productRouter.post('/', (req,res)=>{
    try {
        // console.log("In createProduct");
        res.status(201).json({
            status:"success",
            data:"Product has created"
        })
    } catch (error) {
        
    }
});
//Update Product
productRouter.put('/:productId',(req,res)=>{
    try {
        // console.log("In updateProduct");
        res.status(201).json({
            status:"success",
            data:"Updated Product By ID"
        })
    } catch (error) {
        
    }
});
//Delete Product By ID
productRouter.delete('/:productId',(req,res)=>{
    try {
        // console.log("In deleteProduct");
        res.status(201).json({
            status:"success",
            data:"Product has Deleted by ID"
        })
    } catch (error) {
        
    }
});

module.exports=productRouter;