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
            message:"Error while inserting into database"
        })
    }

}


exports.transactionUpdate=async(req,res)=>{
    const transaction_id=req.query.id

    // upadte logic 
    const getTransaction=await transaction_model.findOne({_id:transaction_id})   
    
    if(getTransaction){
   
    const req_body=req.body

    const tranactionObject={
        email:req_body.email,
        category:req_body.category,
        type:req_body.type,
        amount:req_body.amount,
        description:req_body.description
    };

    // insert it into the database

    try{
        const transaction_updated=await transaction_model.updateOne({_id:transaction_id},{$set:tranactionObject});
        res.status(200).send(transaction_updated);

    }catch(err){
        console.log("Error while updating",err);
        res.status(500).send({
            message:"Error while updating"
        })
    }
    } 
}

//show all datas for the given email id

exports.getAllTransactiondataforLoggedInUser=async(req,res)=>{
    //check for loggedin email
    const getLoggedInEmail=req.query.email
    
    const getTransactions=await transaction_model.find({email:getLoggedInEmail})
    
    if(getTransactions){
        return res.status(200).send(getTransactions)
    }
    return res.status(400).send({
        message:"Data not found"
    })

    //send all the transactions to the user
}