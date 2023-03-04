const express=require('express')
const mongoose=require('mongoose')

mongoose.set('strictQuery',true)

const registerSchema=new mongoose.Schema({
    
        name:{type:String},
        email:{type:String},
        gender:[{type:String}],
       password:{type:String},
    
})
// creating new collection
const UserM=new mongoose.model("UserM",registerSchema)

module.exports=UserM;