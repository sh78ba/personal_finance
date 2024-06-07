/*
    signup POST localhost:8888/personalfinance/api/v1/signup
*/

const authController=require("../controllers/auth.controller")

module.exports=(app)=>{
    app.post("/personalfinance/api/v1/signup",authController.signup)
}