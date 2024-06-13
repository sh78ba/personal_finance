const transaction_model=require("../models/transaction.model")

const verifyTransactionBody=async(req,res,next)=>{
    if(!req.body.email){
        return res.status(400).send({
            message:"email is not provided"
        })
    }

    if(!req.body.category){
        return res.status(400).send({
            message:"category is not provided"
        })
    }

    if(!req.body.type){
        return res.status(400).send({
            message:"type is not provided"
        })
    }


    if(!req.body.amount){
        return res.status(400).send({
            message:"Amount is not provided"
        })
    }

   next();
}


module.exports={
    verifyTransactionBody:verifyTransactionBody
}