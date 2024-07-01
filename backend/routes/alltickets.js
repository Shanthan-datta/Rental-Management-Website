const router = require("express").Router();
const User = require("../models/users");
const AllTickets = require("../models/allticketsschema");
// creates new ticket
router.post("/addTickets", async (req, res) => {
    try {
        
        const {contactNo,flatNo, buildingName , street, city , postalCode, issue,id}=req.body
        const existingUser = await User.findById(id);
        console.log(existingUser)
        if (existingUser) {

            const newTicket = new AllTickets({
                name: existingUser.fullName,
                email: existingUser.email,
                contactNo,
                flatNo,
                buildingName,
                street,
                city,
                postalCode,
                issue,
                users:existingUser,
            });

            await newTicket.save();
            existingUser.TicketsList.push(newTicket);
            await existingUser.save();

            return res.status(200).json({ newTicket });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});
//fetches all tickets
router.get("/allTickets", async (req, res) => {
    try {
        const ticketslist = await AllTickets.find().sort({ createdAt: -1 });
        res.status(200).json({ ticketslist });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching tickets." });
    }
});


module.exports = router;
