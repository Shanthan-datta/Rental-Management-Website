const mongoose = require("mongoose")
const users = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        unique: true,
        required:true,
    },
    contactNo: {
        type: Number,
        unique: true,
        required:true,
    },
    password:{
        type: String,
        required: true,
    },
    
    TicketsList:[{
        type: mongoose.Types.ObjectId,
        ref: "ticketsList" ,
    }]
})
module.exports = mongoose.model("users", users)