const mongoose = require("mongoose")
const ticketsList = new mongoose.Schema({
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
    users:[{
        type: mongoose.Types.ObjectId,
        ref: "users" ,
    }],

},
{timestamps: true}
)
module.exports = mongoose.model("ticketsList",ticketsList)