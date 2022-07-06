const mongoose = require('mongoose')

const Db = "mongodb://localhost:27017/stockdb"

mongoose.connect(Db).then(() => {
    console.log('MongoDB conected')
}).catch((Err) => {
    console.log(Err)
})