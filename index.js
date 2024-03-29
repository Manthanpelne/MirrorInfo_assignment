const express = require("express")
const {connection} = require("./db")
const {shopRouter} = require("./routers/task.route")
const app = express()
require("dotenv").config()

app.use(express.json())


//routes
app.use("/create",shopRouter)
app.use("/read",shopRouter)
app.use("/update",shopRouter)
app.use("/delete",shopRouter)



app.listen(process.env.port,async()=>{
    await connection
    console.log(`listening on port ${process.env.port}`)
})