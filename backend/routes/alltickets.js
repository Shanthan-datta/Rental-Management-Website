const router = require("express").Router()
const User = require("../models/users")
const allTickets = require("../models/allticketsschema")

router.post("/allTickets", async (req,res)=>{
    try {
        const {contactNo,flatNo, buildingName , street, city , postalCode, issue,id}=req.body
        const existinguser = await User.findById(id)
        
        if(existinguser){
            const newticket = new allTickets({ name: existinguser.name, email: existinguser.email ,contactNo,flatNo, buildingName , street, city , postalCode, issue,users:existinguser})
            await newticket.save().then(()=>res.status(200).json({newticket}))
            existinguser.TicketsList.push(newticket)
            existinguser.save()
        }
    } catch (error) {
        console.log("error")
    }
})