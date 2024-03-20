const express=require('express');
const morgan=require('morgan');
require('dotenv').config();
const productRouter=require('../router/product/productRouter');
const userRouter = require('../router/user/userRouter');
const orderRouter = require('../router/order/orderRouter');
const app=express();
const local=0
let baseUrl;

//middleware
app.use(morgan('dev'));
//Routes Folder
// Product Endpoints
// console.log(local);
// console.log(process.env.BASEURL_PROD);
// console.log(process.env.BASEURL_DEV);
console.log(typeof(local))
if(local){
    baseUrl=process.env.BASEURL_PROD;
}
else{
    baseUrl=process.env.BASEURL_DEV;
    
}
console.log(local);
console.log(baseUrl)
app.use(`${baseUrl}products`,productRouter);
/// User Endpoints
app.use(`${baseUrl}users`, userRouter);
// Order Endpoints
app.use(`${baseUrl}orders`,orderRouter); // Admin access

module.exports=app;
