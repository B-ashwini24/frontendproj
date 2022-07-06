const addSchema = require('../modals/Add')

const addCategory = async (req, res) => {
    try {
        const existingCategory = await addSchema.findOne({ category: req.body.category })
        if (existingCategory) return res.status.json({ message: "Category is already here" })

        console.log("inside category"+JSON.stringify(req.body.category))
        const newCategory = await addSchema.findOneAndUpdate({
            $push: { category: { category: req.body.category } }
        })
        console.log(newCategory)

        res.status(201).json(newCategory)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

const addUnit = async (req, res) => {
    try {
        const existingUnit = await addSchema.findOne({ unit: req.body.unit })
        if (existingUnit) return res.status.json({ message: "Unit is already here" })

        const newUnit = await addSchema.findOneAndUpdate({
            $push: { unit: { unit: req.body.unit } }
        })

        res.status(201).json(newUnit)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const getcat=(req,res)=>{
    
    addSchema.find().then(result=>{
        res.send({
            message:"result dound",
            data:result
        })
    })
}

const addCompany = async (req, res) => {
    try {
        const existingcompany = await addSchema.findOne({ companyname: req.body.companyname })
        if (existingcompany) return res.status.json({ message: "company is already here" })

        const newCompany = await addSchema.findOneAndUpdate({
            $push: { companyname: { companyname: req.body.companyname } }
        })

        res.status(201).json(newCompany)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = {
    addCategory,
    addCompany,
    addUnit,getcat
}