const express=require("express")

const custrouter=express.Router()
const {savedata,getdata,editdata,deletedata,deleteall}=require("../controllers/cust.controllers")

const {custmiddleware}=require("../middlewares/cust.middlewares")
custrouter.post("/",custmiddleware,savedata)
custrouter.get("/getdata",getdata)
custrouter.delete("/delete/:id",deletedata)
custrouter.put("/edit",editdata)
custrouter.put("/deleteall",deleteall)
module.exports= custrouter
