const transaction_controller=require("../controllers/transaction.controller")
const transactionMw=require("../middlewares/transaction.mw")


module.exports=(app)=>{
    app.put("/personalfinance/api/v1/transaction/create",[transactionMw.verifyTransactionBody],transaction_controller.transaction)
}

