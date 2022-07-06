const Customer=require("../modals/Customer")
const savedata=(req,res)=>{
    const customer=new Customer({
        itemname:req.body.itemname,
        companyname:req.body.companyname,
        quantity:req.body.quantity,
        category:req.body.category,
        itemid:req.body.itemid,
        unit:req.body.unit,
        itemprice:req.body.itemprice
    })
    customer.save().then(data=>{
        res.send({
            message:"data saved",
            data:data
        })
    })
    
}
const deletedata=(req,res)=>{
    Customer.deleteOne({_id:req.params.id}).then(response=>{
res.send({
    message:"item deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const deleteall=(req,res)=>{
    Customer.deleteMany({id:req.params.id}).then(response=>{
res.send({
    message:"item deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const editdata=(req,res)=>{
    const data=req.body
    console.log(data)
    Customer.updateOne({_id:data._id},{$set:{quantity:data.quantity}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
const getdata=(req,res)=>{
    
    Customer.find().then(result=>{
        res.send({
            message:"result dound",
            data:result
        })
    })
}
module.exports={
    savedata,getdata,editdata,deletedata,deleteall
}