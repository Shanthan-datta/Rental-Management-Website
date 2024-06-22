const mongoose = require("mongoose")
const allTicketsList = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    
    flatNo: {
        type: String,
        required: true,
    },
    buildingName: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    issue:{
        type: String,
        required: true,
    },

},
{timestamps: true}
)
module.exports = mongoose.model("allTicketsList",allTicketsList)