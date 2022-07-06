const express=require("express")

const historyrouter=express.Router()
const {getdata,savedata}=require("../controllers/history.controllers")

//const {custmiddleware}=require("../middlewares/cust.middlewares")
historyrouter.post("/",savedata)
historyrouter.get("/getdata",getdata)
//custrouter.delete("/delete/:id",deletedata)
//custrouter.put("/edit",editdata)

module.exports= historyrouter
