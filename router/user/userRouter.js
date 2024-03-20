const express=require('express');
const { userSignUp, getUserById, updateUserById, userLogin, deleteUserById } = require('../../controller/user/userController');
const userRouter=express.Router();

userRouter.post('/signup', userSignUp);
userRouter.post('/login',userLogin);
userRouter.get('/:userId',getUserById);
userRouter.put('/:userId', updateUserById);
userRouter.delete('/:userId', deleteUserById);
module.exports=userRouter;