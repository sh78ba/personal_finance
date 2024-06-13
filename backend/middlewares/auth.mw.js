const user_model=require("../models/user.model")
const jwt=require("jsonwebtoken")
const auth_config=require("../configs/auth.config")

const verifySignUpBody=async(req,res,next)=>{
    try{
        if(!req.body.name){
            return res.status(400).send({
                message:"Name was not provided in request body"
            })
        }

        if(!req.body.email){
            return res.status(400).send({
                message:"email was not provided in request body"
            })
        }

        if(!req.body.password){
            return res.status(400).send({
                message:"Password was not provided in request body"
            })
        }

        const user=await user_model.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({
                message:"Failed ! Email already present"
            })

        }

        next();
    }catch(err){
        console.log("EError while validating the request body",err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
}

const verifySignInBody=async(req,res,next)=>{
    if(!req.body.email){
        return res.status(400).send({
            message:"Email is required!!!"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message:"Password is required!!!"
        })
    }
    next()
}

const verifyToken=async(req,res,next)=>{
    const token=req.headers["x-access-token"]
    if(!token){
        return res.status(403).send({
            message:"No token found:UnAuthorized"
        })
    }
    jwt.verify(token,auth_config.SECRET,async(err,decoded)=>{

        if(err){
            return res.status(401).send({
                message:"UnAuthorized!!"
            })
        }

        const user=await user_model.findOne({email:decoded.email})
        if(!user){
            return res.status(400).send({
                message:"UnAuthorized, the user for this token doesn't exists"
            })
        }
        ///set the user info in the req body
        req.email=decoded.email
    
        next()
    })
}

module.exports={
    verifySignInBody:verifySignInBody,
    verifySignUpBody:verifySignUpBody,
    verifyToken:verifyToken
}