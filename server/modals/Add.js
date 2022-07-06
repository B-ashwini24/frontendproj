const mongoose = require('mongoose')

const addCategorySchema = new mongoose.Schema({
    category: {
        type: Array,
        unique: true
    },
    companyname: {
        type: Array,
        unique: true
    },
    unit: {
        type: Array,
        unique: true
    },
}, {
    timestamps: true
})

const addSchema = new mongoose.model("addSchema", addCategorySchema)

module.exports = addSchema