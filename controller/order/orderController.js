const Order=require('../../model/order/order')
require('../../config/dbConnect')
//Get All Orders
exports.getAllOrders=async(req,res)=>{
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// Get Order By ID
exports.getOrderById= async(req,res)=>{
    try {
        const order = await Order.findById(req.params.orderId);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//place order
exports.createOrder=async(req,res)=>{
    try {
        const order = new Order({
            user: req.body.userId,
            products: req.body.products,
            totalPrice: req.body.totalPrice,
            status: 'pending' // Assuming new orders are pending by default
        });
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//Update Order By ID
exports.updateOrderById=async(req,res)=>{
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
        if (updatedOrder) {
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//Delete Order By ID
exports.deleteOrderById= async(req,res)=>{
    
        // console.log("In deleteOrder");
        try {
            const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
            if (deletedOrder) {
                res.json({ message: 'Order deleted' });
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
}