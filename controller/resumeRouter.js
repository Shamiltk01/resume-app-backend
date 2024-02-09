const express=require("express")
const resumeModel=require("../model/resumeModel")

router=express.Router()

router.post("/add",async(req,res)=>{
    res.send("ok")
})



module.exports=router