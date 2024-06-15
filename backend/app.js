const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("./conn/conn")
const auth = require('./routes/autherization')
const newticketlist = require('./routes/list')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send('home')
})

app.use("/api/v1",auth)
app.use("/api/v", newticketlist)

app.listen(1000,()=>{
    console.log("kjsdfhsdh")
})