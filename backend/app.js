const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
require("./conn/conn")
const auth = require('./routes/autherization')
const newticketlist = require('./routes/list')
const newticketall = require('./routes/alltickets')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get("/",(req,res)=>{
    res.send('home')
})


app.use("/api/v1",auth)
app.use("/api/v2", newticketlist)
app.use("/api/allList", newticketall)


app.listen(1000,()=>{
    console.log("ok")
})