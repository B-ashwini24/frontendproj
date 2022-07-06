const express = require("express")
const { registerUser, LoginUser } = require("../controllers/authController")

const authRouter = express.Router()


//For Registering the user
authRouter.post("/register",  registerUser)

//For Login the user
authRouter.post("/login", LoginUser)


module.exports = authRouter