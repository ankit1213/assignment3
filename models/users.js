const mongoose =require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    topic:{type:String},
    description:{type:String},
    posted_by:{type:String}
},{timestamps:true})

const userModel=mongoose.model("blog",userSchema)

module.exports=userModel;

