const mongoose = require("mongoose")
const Staff = new mongoose.Schema({
    
    fullName:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        unique: true,
        required:true,
    },
    contactNo: {
        type: String,
        unique: true,
        required:true,
    },
    staffId:{
        type: String,
        required: true,
    },
    work:{
        type: String,
        required: true,
    },
    
    TicketsList:[{
        type: mongoose.Types.ObjectId,
        ref: "ticketsList" ,
    }]
})
module.exports = mongoose.model("staff", Staff)