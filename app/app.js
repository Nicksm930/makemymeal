const express=require('express');
const morgan=require('morgan');
require('dotenv').config();
const productRouter=require('../router/product/productRouter');
const userRouter = require('../router/user/userRouter');
const orderRouter = require('../router/order/orderRouter');
const app=express();
const local=0
let baseUrl;
if(local){
    baseUrl=process.env.BASEURL_PROD;
}
else{
    baseUrl=process.env.BASEURL_DEV;
    
}

//middleware
app.use(morgan('dev'));
//Routes Folder
// Product Endpoints
app.use(`${baseUrl}products`,productRouter);
/// User Endpoints
app.use(`${baseUrl}users`, userRouter);
// Order Endpoints
app.use(`${baseUrl}orders`,orderRouter); // Admin access

module.exports=app;
