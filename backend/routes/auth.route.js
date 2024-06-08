/*
    signup POST localhost:8888/personalfinance/api/v1/signup
*/

const authController=require("../controllers/auth.controller")
const authMw=require("../middlewares/auth.mw")

module.exports=(app)=>{
    app.post("/personalfinance/api/v1/signup",[authMw.verifySignUpBody],authController.signup)
}

module.exports=(app)=>{
    app.post("/personalfinance/api/v1/signin",[authMw.verifySignInBody],authController.signin)
}