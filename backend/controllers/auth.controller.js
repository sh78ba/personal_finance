const bcrypt=require("bcryptjs")
const user_model=require("../models/user.model")
const jwt=require("jsonwebtoken")

exports.signup=async(req,res)=>{
    //get all the data
    const request_body=req.body

    const userObject={
        name:request_body.name,
        email:request_body.email,
        password:bcrypt.hashSync(request_body.password,8)
    }

    //insert it into the database User schema

    try{

        const user_created=await user_model.create(userObject)

        const res_object={
            name:user_created.name,
            email:user_created.email,
            userId:user_created._id
        }

        res.status(201).send(res_object)

    }catch(err){
        console.log("Error while registering the user",err)
        res.status(500).send({
            message:"Error while registering the user"
        })
    }
}

exports.signin=async(req,res)=>{

    //get details from body
    

    //find if user is present

    //verify the password

    //create jwt token and expiry

}
