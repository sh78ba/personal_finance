const express=require("express")
const mongoose=require("mongoose")
const app=express()
const db_config=require("./configs/db.config")
const server_config=require("./configs/server.config")
const bcrypt=require("bcryptjs")

//for getting object in JSON format
app.use(express.json())


//for database conection
mongoose.connect(db_config.DB_URL)

const db=mongoose.connection

db.on("error",()=>{
    console.log("Error while connecting to Database")
})

db.once("open",()=>{
    console.log("Successfull connecting the database")
})


app.listen(server_config.PORT,()=>{
    console.log("Server started at port",server_config.PORT)
})


