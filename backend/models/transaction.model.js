const mongoose=require("mongoose")

const transactionSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        default:["BANK"],
        enum:["BANK","CREDIT CARD","INVESTMENT"]
    },
    type:{
        type:String,
        required:true,
        default:["DEBIT"],
        enum:["DEBIT","CREDIT","INVESTMENT"]
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    }

},{timestamps:true,versionKey:false})

module.exports=mongoose.model("Transaction",transactionSchema)