const express = require('express')
const app = express()
require("./conn/conn")
app.get("/",(req,res)=>{
    res.send('home')
})
app.listen(1000,()=>{
    console.log("")
})