const express=require('express')
const notesRouter=express.Router();
const UserN=require('../models/schemapost')


notesRouter.get("/",async(req,res)=>{

    const notes=await UserN.find()
    res.send("hello")
})


notesRouter.post("/create",async(req,res)=>{

    const payload=req.body


    try {
        const new_note=new UserN(payload)
        await UserN.save()

        res.send({"msg":"note created succesfully"})
        
    } catch (error) {
        console.log(error)
        res.send({"err":"something went wrong"})
        
    }
})

notesRouter.patch("/update/:noteID",async(req,res)=>{

    const noteID=req.params.noteID
    const userID=req.body.userID
    const note=await UserN.findOne({_id:noteID})

    if(userID!==note.userID){
        res.send("Note Authorized")
    }


    else{
        await UserN.findByIdAndUpdate({_id:noteID,payload})

        res.send({"msg":"posts updated"})
    }

    
})

notesRouter.get("/delete/:noteID",async(req,res)=>{
    const noteID=req.params.noteID

    await UserN.findByIdAndDelete({_id:noteID})

    res.send({"msg":"posts delted success"})

   
})



module.exports=notesRouter;

