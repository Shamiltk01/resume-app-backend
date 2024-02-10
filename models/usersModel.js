const mongoose=require("mongoose")

const userModel=new mongoose.Schema({
  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model("usersCollection",userModel)