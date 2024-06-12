const transaction_controller=require("../controllers/transaction.controller")
const transactionMw=require("../middlewares/transaction.mw")


module.exports=(app)=>{
    app.post("/personalfinance/api/v1/transaction/create",[transactionMw.verifyTransactionBody],transaction_controller.transaction)
}

module.exports=(app)=>{
    app.put("/personalfinance/api/v1/transaction/update",[transactionMw.verifyTransactionBody],transaction_controller.transactionUpdate)
}

module.exports=(app)=>{
    app.get("/personalfinance/api/v1/transaction/getalldetails",transaction_controller.getAllTransactiondataforLoggedInUser)
}

module.exports=(app)=>{
    app.delete("/personalfinance/api/v1/transaction/delete",transaction_controller.deleteTransaction)
}


