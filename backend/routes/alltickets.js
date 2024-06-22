const router = require("express").Router();
const User = require("../models/users");
const AllTickets = require("../models/allticketsschema");

router.post("/allTickets", async (req, res) => {
    try {
        
        const { contactNo, flatNo, buildingName, street, city, postalCode, issue } = req.body;
        const existingUser = await User.findOne({ contactNo: req.body.contactNo });
        console.log(existingUser)
        if (existingUser) {
            console.log("pedda error")
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

module.exports = router;
