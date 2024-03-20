const express=require('express');
const userRouter=express.Router();

userRouter.post('/signup', (req,res)=>{
    try {
        // console.log("In signup");
        res.status(201).json({
            status:"success",
            data:"User has Registered"
        })
    } catch (error) {
        
    }
});
userRouter.post('/login', (req,res)=>{
    try {
        // console.log("In login");
        res.status(201).json({
            status:"success",
            data:"User Login"
        })
    } catch (error) {
        
    }
});
userRouter.get('/:userId', (req,res)=>{
    try {
        // console.log("In getUserById");
        res.status(201).json({
            status:"success",
            data:"Get User By ID"
        })
    } catch (error) {
        
    }
});
userRouter.put('/:userId', (req,res)=>{
    try {
        // console.log("In updateUser");
        res.status(201).json({
            status:"success",
            data:"Update User By ID"
        })
    } catch (error) {
        
    }
});
userRouter.delete('/:userId', (req,res)=>{
    try {
        // console.log("In deleteUser");
        res.status(201).json({
            status:"success",
            data:"User Deleted By ID"
        })
    } catch (error) {
        
    }
});
module.exports=userRouter;