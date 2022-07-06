const express=require("express")

const stockrouter=express.Router()
const {savedata,getdata,getbuyers,editdata,deletedata}=require("../controllers/stock.controllers")

const {stockmiddleware}=require("../middlewares/stock.middlewares")
stockrouter.post("/",stockmiddleware,savedata)
stockrouter.get("/getstock",getdata)
stockrouter.get("/getbuyersdata",getbuyers)
stockrouter.delete("/delete/:id",deletedata)
stockrouter.put("/edit",editdata)

module.exports= stockrouter
