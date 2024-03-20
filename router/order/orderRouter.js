const express=require('express');
const orderRouter=express.Router();

orderRouter.get('/',(req,res)=>{
    try {
        // console.log("In getAllOrders");
        res.status(201).json({
            status:"success",
            data:"Get ALl Orders"
        })
    } catch (error) {
        
    }
}); // Admin access
orderRouter.get('/:orderId', (req,res)=>{
    try {
        // console.log("In getOrderById");
        res.status(201).json({
            status:"success",
            data:"Get Order By ID"
        })
    } catch (error) {
        
    }
});
orderRouter.post('/', (req,res)=>{
    try {
        // console.log("In placeOrder");
        res.status(201).json({
            status:"success",
            data:"Place Order"
        })
    } catch (error) {
        
    }
});
orderRouter.put('/:orderId', (req,res)=>{
    try {
        // console.log("In updateOrder");
        res.status(201).json({
            status:"success",
            data:"Update order By ID"
        })
    } catch (error) {
        
    }
}); 
orderRouter.delete('/:orderId', (req,res)=>{
    try {
        // console.log("In deleteOrder");
        res.status(201).json({
            status:"success",
            data:"Delete Order BY ID"
        })
    } catch (error) {
        
    }
});
module.exports=orderRouter;