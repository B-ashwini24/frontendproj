const express = require('express')
const { addCategory, addUnit, addCompany,getcat } = require('../controllers/add.controllers')

const addRouter = express.Router()

addRouter.put('/category', addCategory)
addRouter.put('/unit', addUnit)
addRouter.put('/company', addCompany)
addRouter.get("/getcat",getcat)



module.exports = addRouter