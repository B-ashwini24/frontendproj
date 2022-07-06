const express = require('express')
require('./DbConn/config')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/auth.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const custrouter=require("./routes/cust.routes")
const stockrouter=require("./routes/stock.router")
const addRouter = require('./routes/add.routes')
const historyrouter=require("./routes/history.routes")
app.use("/customer",custrouter)
app.use("/stock",stockrouter)
app.use("/addlist",addRouter)
app.use("/history",historyrouter)
app.use(cookieParser())

app.use('/api', addRouter)
app.use('/auth', authRouter)

app.listen(4000, () => {
    console.log('Server is running at port 4000')
})