
const mongoose=require("mongoose")
const itemSchema=new mongoose.Schema({
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
    quantity:{
        type:Number
    },
    itemprice:{
        type:Number
    },
    itemtype:{
        type:String
    },
    unit:{
        type:String
    }

})

module.exports=mongoose.model("Stock",itemSchema)