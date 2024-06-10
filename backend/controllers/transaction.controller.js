const transaction_model=require("../models/transaction.model")

exports.transaction=async(req,res)=>{

    //get details from user
    const req_body=req.body

    const tranactionObject={
        email:req_body.email,
        category:req_body.category,
        type:req_body.type,
        amount:req_body.amount,
        description:req_body.description
    }

    //insert it into the database

    try{
        const transaction_created=await transaction_model.create(tranactionObject);
        res.status(200).send(transaction_created);

    }catch(err){
        console.log("Error while inserting into database",err);
        res.status(500).send({
            messeage:"Error while inserting into database"
        })
    }

}


exports.transactionUpdate=async(req,res)=>{
    // const req_body=req.body


}