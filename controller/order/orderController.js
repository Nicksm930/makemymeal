//Get All Orders
exports.getAllOrders=(req,res)=>{
    try {
        // console.log("In getAllOrders");
        res.status(201).json({
            status:"success",
            data:"Get ALl Orders"
        })
    } catch (error) {
        
    }
}
// Get Order By ID
exports.getOrderById= (req,res)=>{
    try {
        // console.log("In getOrderById");
        res.status(201).json({
            status:"success",
            data:"Get Order By ID"
        })
    } catch (error) {
        
    }
}
//place order
exports.createOrder=(req,res)=>{
    try {
        // console.log("In placeOrder");
        res.status(201).json({
            status:"success",
            data:"Place Order"
        })
    } catch (error) {
        
    }
}
//Update Order By ID
exports.updateOrderById=(req,res)=>{
    try {
        // console.log("In updateOrder");
        res.status(201).json({
            status:"success",
            data:"Update order By ID"
        })
    } catch (error) {
        
    }
}
//Delete Order By ID
exports.deleteOrderById= (req,res)=>{
    try {
        // console.log("In deleteOrder");
        res.status(201).json({
            status:"success",
            data:"Delete Order BY ID"
        })
    } catch (error) {
        
    }
}