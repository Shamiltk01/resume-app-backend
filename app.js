const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const resumeRouter=require("./controller/resumeRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/resume",resumeRouter)

mongoose.connect("mongodb+srv://shamiltk02:shamiltk98@cluster0.7syqm.mongodb.net/resumeDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("server is running....")
})
