/*
    signup POST localhost:8888/personalfinance/api/v1/signup
*/

const authController=require("../controllers/auth.controller")
const authMw=require("../middlewares/auth.mw")

module.exports=(app)=>{
    //signup
    app.post("/personalfinance/api/v1/signup",[authMw.verifySignUpBody],authController.signup)

    //signin
    app.post("/personalfinance/api/v1/signin",[authMw.verifySignInBody],authController.signin)
}
