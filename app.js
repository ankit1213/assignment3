const express=require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Blog');
const User=require('./models/users')
// const loginRoutes=require('./routes/login')
// const userRoutes=require('./routes/users')


const app=express();
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Welcome to express server of assignment 6")
})

app.get("/blog",async(req,res)=>{
    console.log(req.query)
    const user =await User.find({"topic":req.query.search}).limit(Number(req.query.page))
    console.log(req.query.search)
    res.json(
        {
            status:"Success",
            user:user

        })
        
})

app.put("/blog/:id" ,async(req,res)=>{
    
    console.log(req.params.id)
    await User.updateOne({"_id":req.params.id},req.body)
    res.json({
        status:"Success" 
    })
})

app.post("/blog",async(req,res)=>{
    await User.create(req.body)
    res.status(200).json(req.body)
})
app.delete("/blog/:id",async(req,res)=>{
    await User.deleteOne({_id:req.params.id})
    res.json({
        status:"Succesfully deleted"
    })
})

app.listen(3000,()=>{
    console.log("Server is up at 3000")
})