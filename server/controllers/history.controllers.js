const History=require("../modals/history")
const getdata=(req,res)=>{
        History.find().then(result=>{
            console.log("data")
            res.send({
                    msg:"data found",
                    data:result
            })
        }).catch(err=>{
            console.log(err)
        })
}
const savedata=(req,res)=>{
    const history=new History({
        itemname:req.body.itemname,
        companyname:req.body.companyname,
        quantity:req.body.quantity,
        category:req.body.category,
        itemid:req.body.itemid,
        unit:req.body.unit,
        itemprice:req.body.itemprice
    })
    console.log(req.body)
    History.insertMany(req.body).then(data=>{
        res.send({
            message:"data saved",
            data:data
        })
    })
}

module.exports={
    getdata,savedata
}