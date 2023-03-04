const express=require('express')
const mongoose=require('mongoose')

mongoose.set('strictQuery',true)

const postSchema=new mongoose.Schema({
    
        title:{type:String},         
        body:{type:String},
        device:[{type:String}],
      
    
})
// creating new collection
const UserN=new mongoose.model("UserN",postSchema)

module.exports=UserN;