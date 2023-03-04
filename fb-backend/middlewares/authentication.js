const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{

    const token=req.headers?.authorization?.split(" ")[1]

    if(token){

        const decoded=jwt.verify(token,'hush')

        if(decoded){
            const userId=decoded.userId
            req.body.userId=userId
            next()

        }

        else{
            res.send("pls login")
        }
    }

    else{
        res.send("please login")
    }
}

module.exports={
    authenticate
}