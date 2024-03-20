const express=require('express');
const { getAllOrders, getOrderById, createOrder, updateOrderById, deleteOrderById } = require('../../controller/order/orderController');
const orderRouter=express.Router();
//GetAll Orders
orderRouter.get('/',getAllOrders);
 // Get Order By ID
orderRouter.get('/:orderId',getOrderById);
//Place Order 
orderRouter.post('/', createOrder);
//Update Order By ID
orderRouter.put('/:orderId', updateOrderById); 
//Delete Order By ID
orderRouter.delete('/:orderId',deleteOrderById);
module.exports=orderRouter;