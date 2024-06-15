const express = require('express')
const app = express()
require("./conn/conn")
const auth = require('./routes/autherization')
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('home')
})

app.use("/api/v1",auth)

app.listen(1000,()=>{
    console.log("kjsdfhsdh")
})