//SignUp User
exports.userSignUp=(req,res)=>{
    try {
        // console.log("In signup");
        res.status(201).json({
            status:"success",
            data:"User has Registered"
        })
    } catch (error) {
        
    }
}
//User Login
exports.userLogin= (req,res)=>{
    try {
        // console.log("In login");
        res.status(201).json({
            status:"success",
            data:"User Login"
        })
    } catch (error) {
        
    }
}
//Search User By ID
exports.getUserById= (req,res)=>{
    try {
        // console.log("In getUserById");
        res.status(201).json({
            status:"success",
            data:"Get User By ID"
        })
    } catch (error) {
        
    }
}
//Update User By ID
exports.updateUserById=(req,res)=>{
    try {
        // console.log("In updateUser");
        res.status(201).json({
            status:"success",
            data:"Update User By ID"
        })
    } catch (error) {
        
    }
}
//Delete User By ID
exports.deleteUserById=(req,res)=>{
    try {
        // console.log("In deleteUser");
        res.status(201).json({
            status:"success",
            data:"User Deleted By ID"
        })
    } catch (error) {
        
    }
}