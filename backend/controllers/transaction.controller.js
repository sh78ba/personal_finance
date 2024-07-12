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

const { parse } = require('date-fns');
const { startOfDay, endOfDay } = require('date-fns');

exports.getAllTransactiondataforLoggedInUser = async (req, res) => {
  const getLoggedInEmail = req.query.email;
  const { date } = req.query;

  let dateFilter = {};
  if (date) {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
    const start = startOfDay(parsedDate);
    const end = endOfDay(parsedDate);
    dateFilter.createdAt = {
      $gte: start,
      $lte: end
    };
  }

  try {
    const getTransactions = await transaction_model.find({
      email: getLoggedInEmail,
      ...dateFilter
    });
    res.status(200).send(getTransactions);
  } catch (err) {
    console.log("Error while fetching", err);
    res.status(500).send({
      message: "Error while fetching"
    });
  }
};


//get monthly transaction details 

const { startOfMonth, endOfMonth } = require('date-fns');

exports.getAllTransactiondataforLoggedInUserMonthly = async (req, res) => {
  const getLoggedInEmail = req.query.email;

  const now = new Date();
  const start = startOfMonth(now);
  const end = endOfMonth(now);

  let dateFilter = {
    createdAt: {
      $gte: start,
      $lte: end
    }
  };

  try {
    const getTransactions = await transaction_model.find({
      email: getLoggedInEmail,
      ...dateFilter
    });
    res.status(200).send(getTransactions);
  } catch (err) {
    console.log("Error while fetching", err);
    res.status(500).send({
      message: "Error while fetching"
    });
  }
};


//delete transaction

exports.deleteTransaction=async(req,res)=>{
    const getTransactionId=req.query.id

     try{
    const getTransaction=await transaction_model.findByIdAndDelete({_id:getTransactionId})   
        res.status(200).send({
         message:"Successfully deleted",
        })
    }catch(err){
        console.log("Error while deleting",err);
        res.status(500).send({
            message:"Error while deleting"
        })
    }
}


//two year investment data
const { startOfYear, endOfYear, subYears } = require('date-fns');


exports.getAllInvestmentfortwoyear = async (req, res) => {
  const getLoggedInEmail = req.query.email;

  const now = new Date();
  const startOfCurrentYear = startOfYear(now);
  const endOfCurrentYear = endOfYear(now);
  const startOfPreviousYear = startOfYear(subYears(now, 1));
  const endOfPreviousYear = endOfYear(subYears(now, 1));

  let currentYearFilter = {
    createdAt: {
      $gte: startOfCurrentYear,
      $lte: endOfCurrentYear
    },
    category: 'INVESTMENT'
  };

  let previousYearFilter = {
    createdAt: {
      $gte: startOfPreviousYear,
      $lte: endOfPreviousYear
    },
    category: 'INVESTMENT'
  };

  try {
    const currentYearTransactions = await transaction_model.find({
      email: getLoggedInEmail,
      ...currentYearFilter
    });

    const previousYearTransactions = await transaction_model.find({
      email: getLoggedInEmail,
      ...previousYearFilter
    });

    res.status(200).send({
      currentYear: currentYearTransactions,
      previousYear: previousYearTransactions
    });
  } catch (err) {
    console.log("Error while fetching", err);
    res.status(500).send({
      message: "Error while fetching"
    });
  }
};

//overall income


exports.getoverallIncome = async (req, res) => {
  const getLoggedInEmail = req.query.email;

  const now = new Date();
  const start = startOfYear(now);
  const end = endOfYear(now);

  let dateFilter = {
    createdAt: {
      $gte: start,
      $lte: end
    }
  };

  try {
    const getTransactions = await transaction_model.find({
      email: getLoggedInEmail,
      ...dateFilter
    });

    // Calculate the sum of transactions for 'credit' and 'debit' types
    const sums = getTransactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'CREDIT') {
          acc[0] += transaction.amount; // Sum of credits
        } else if (transaction.type === 'DEBIT') {
          acc[1] += transaction.amount; // Sum of debits
        }
        return acc;
      },
      [0, 0] // Initial values for credits and debits
    );
    const sumsall = {
      creditSum: sums[0],
      debitSum: sums[1]
    };
    res.status(200).send(sumsall);
  } catch (err) {
    console.log("Error while fetching", err);
    res.status(500).send({
      message: "Error while fetching"
    });
  }
};
