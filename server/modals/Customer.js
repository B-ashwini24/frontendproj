
const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
    itemid:{
        type:Number
    },
    itemname:{
        type:String
    },
    companyname:{
        type:String
    },
    category:{
        type:String
    },
    itemprice:{
        type:Number
    },
    quantity:{
        type:Number,
        default:1
    },
    unit:{
        type:String
    }

})

module.exports=mongoose.model("Customer",customerSchema)