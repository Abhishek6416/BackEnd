const express=require ('express');
// const connection=require("./configs/connection")
const connection=require("./configs/connection")
const jwt=require("jsonwebtoken")
const UserM=require("./models/schemaregister")
const bcrypt=require('bcrypt')
const UserN=require("./models/schemapost");
// const { authenticate } = require('./middlewares/authentication');
const { authenticate } = require('./middlewares/authentication');
const notesRouter=require("./routes/router")

// const UserModel=require("./models/usermodel")


const app=express()
app.use(express.json())
// app.use(router)

const port=8000;




app.get('/',async(req,res)=>{

    res.send("This side from Nehal")
})

app.post('/users/register',async(req,res)=>{
    const{name,email,gender,password}=req.body;

    try {

        bcrypt.hash(password, 5, async function(err, hash) {
        
            const user=new UserM({name,email,gender,password:hash})
            await user.save()
            res.send("register succesful")

           
        });
        
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
        
    }
})


app.post('/users/login',async(req,res)=>{
    const{email,password}=req.body;

    try {

        const user=await UserM.find({email})

        if(user.length > 0){

            const hashed_password=user[0].password;
            bcrypt.compare(password,hashed_password,function(err,result){

                if(result){

                    const token=jwt.sign({"userID":user[0]._id},'hush');
                    // const token=jwt.sign({"course":"nxm"},'hush');
                    res.send({"msg":"login succesful","token":token})
                }

                else{
                    res.send("login failed")
                }
            })
        }

        else{
            res.send("login failed")
        }

      
        
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
        
    }
})





app.use(authenticate)
app.use("/posts",notesRouter)


app.listen(port, async(req,res)=>{

    try {
        connection()
        console.log(`server is running at ${port}`)
    } catch (error) {
        
    }
})