const transaction_controller=require("../controllers/transaction.controller")
const transactionMw=require("../middlewares/transaction.mw")
const authMw=require("../middlewares/auth.mw")

module.exports=(app)=>{
    //create transaction
    app.post("/personalfinance/api/v1/transaction/create",[transactionMw.verifyTransactionBody,authMw.verifyToken],transaction_controller.transaction)

    //update transaction
    app.put("/personalfinance/api/v1/transaction/update",[transactionMw.verifyTransactionBody,authMw.verifyToken],transaction_controller.transactionUpdate)

    //getalldetails of transaction filter by date
    app.get("/personalfinance/api/v1/transaction/getalldetails",[authMw.verifyToken],transaction_controller.getAllTransactiondataforLoggedInUser)

    //delete transaction
    app.delete("/personalfinance/api/v1/transaction/delete",authMw.verifyToken,transaction_controller.deleteTransaction)

    //get transaction monthly
    app.get("/personalfinance/api/v1/transaction/getmonthly",authMw.verifyToken,transaction_controller.getAllTransactiondataforLoggedInUserMonthly)

    //get two year investment
    app.get("/personalfinance/api/v1/transaction/gettwoyearinvestment",authMw.verifyToken,transaction_controller.getAllInvestmentfortwoyear)

    //overall income for current year
    app.get("/personalfinance/api/v1/transaction/overallincome",authMw.verifyToken,transaction_controller.getoverallIncome)
}


 