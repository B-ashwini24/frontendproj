const UserAuthentication = require('../modals/authSchema')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

//Registering the user
const registerUser = async (req, res, next) => {
    const { username, password, email } = req.body

    if (!username || !password || !email) {
        res.status(404).json({ message: "Require fields are empty" })
    }
    let hash = await bcrypt.hash(password, 10)
    try {
        const newUser = new UserAuthentication({
            username, password: hash, email
        })
        await newUser.save()

        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

//Loging the user
const LoginUser = async (req, res, next) => {
    const { email } = req.body
    try {
        const passwords = String(req.body.password)
        const loginUser = await UserAuthentication.findOne({ email: email })
        if (!loginUser) return res.status(404).json({message:"User not found"})

        const ispasswordCorrect = await bcrypt.compare(passwords, loginUser.password)
        if (!ispasswordCorrect) return  res.status(404).json({message:"Invalid Password"})

        const token = JWT.sign({ id: loginUser._id, isAdmin: loginUser.isAdmin },
           "FinalGroupProject")
        const { password,  ...other } = loginUser._doc

        res.status(200).json({ ...other,token })

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


module.exports = {
    registerUser,
    LoginUser
}