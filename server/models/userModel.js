const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
    isAdmin: {type:Boolean , require , default:false},//if the user is having admin access we have set it true so not all user having the admin access so i put default as false
    name: {type:String,require},
    email: {type:String,require},
    password: {type:String,require},
    
},
{
    timestamps:true,
})

module.exports=mongoose.model("users",userSchema)