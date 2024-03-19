const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema(
{
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
    
},
{
    timestamps:true
}
    
);
const User=mongoose.model("User",userSchema);
module.exports=User;