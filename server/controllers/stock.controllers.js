const Stock=require("../modals/Stock")
const savedata=(req,res)=>{
    const stock=new Stock({
        itemid:req.body.itemid,
        itemname:req.body.itemname,
        companyname:req.body.companyname,
        quantity:req.body.quantity,
        category:req.body.category,
        itemprice:req.body.itemprice,
        itemtype:req.body.itemtype,
        unit:req.body.unit

    })
    stock.save().then(data=>{
        res.send({
            message:"data saved",
            data:data
        })
    })
    
}
const getdata=(req,res)=>{
    Stock.find().then(result=>{
        res.send({
            message:"result dound",
            data:result
        })
    })
}
const getbuyers=(req,res)=>{
    Stock.find({ itemtype:'buy' }).then(result=>{
        res.send({
            message:"result dound",
            data:result
        })
    })
}
const deletedata=(req,res)=>{
    Stock.deleteOne({_id:req.params.id}).then(response=>{
res.send({
    message:"Product deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const editdata=(req,res)=>{
    const data=req.body
    console.log(data)
    Stock.updateOne({_id:data._id},{$set:{itemname:data.itemname,quantity:data.quantity,itemprice:data.itemprice}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
module.exports={
    savedata,getdata,getbuyers,
    deletedata,
    editdata
}