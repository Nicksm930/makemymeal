//Get All Products
exports.getAllProducts=(req,res)=>{
    try {
        res.status(201).json({
            status:"success",
            data:"Display all Products"
        })
    } catch (error) {
        
    }
}
//Get Product By ID
exports.getProductById=(req,res)=>{
    try {
        res.status(201).json({
            status:"success",
            data:"Get Product By ID"
        })
        // console.log("In getProductById");
    } catch (error) {
        
    }
}
//Create Product
exports.createProduct= (req,res)=>{
    try {
        // console.log("In createProduct");
        res.status(201).json({
            status:"success",
            data:"Product has created"
        })
    } catch (error) {
        
    }
}
//Update Product
exports.updateProductById=(req,res)=>{
    try {
        // console.log("In updateProduct");
        res.status(201).json({
            status:"success",
            data:"Updated Product By ID"
        })
    } catch (error) {
        
    }
}
//Delete Product By ID
exports.deleteProductById=(req,res)=>{
    try {
        // console.log("In deleteProduct");
        res.status(201).json({
            status:"success",
            data:"Product has Deleted by ID"
        })
    } catch (error) {
        
    }
}
