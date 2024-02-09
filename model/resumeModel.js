const mongoose=require("mongoose")

const resumeSchema=mongoose.Schema({
    name:String,
    age:String,
    phoneno:String,
    education:String,
    workexp:String
})

module.exports=mongoose.model("resume",resumeSchema)