const router = require("express").Router();
const staff = require("../models/staff");
const tickets = require("../models/allticketsschema");

router.post("/staffregister", async (req, res) => {
    try {
        const { fullName, staffId, work, email, contactNo } = req.body;

        // Basic validation
        if (!fullName || !staffId || !work || !email || !contactNo) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check for duplicate email or contactNo
        const existingStaff = await staff.findOne({ $or: [{ email }, { contactNo }] });
        if (existingStaff) {
            return res.status(400).json({ message: "Email or Contact Number already exists" });
        }

        // Create new staff
        const newStaff = new staff({
            fullName,
            staffId,
            work,
            email,
            contactNo
        });

        // Save to database
        await newStaff.save();

        res.status(201).json({ message: "Staff registered successfully", staff: newStaff });
    } catch (error) {
        console.error("Error registering staff:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post("/login", async (req, res) => {
    try {
        const { email, staffId } = req.body;

        // Basic validation
        if (!email || !staffId) {
            return res.status(400).json({ message: "Email and Staff ID are required" });
        }

        // Check if the staff member exists
        const Staff = await staff.findOne({ email: req.body.email, staffId: req.body.staffId });
        if (!Staff) {
            return res.status(401).json({ message: "Wrong email or staff ID" });
        }

        // If staff member exists, return the staff ID
        res.status(200).json({ id: Staff._id, message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get("/stafflist", async (req, res) => {
    try {
        // Fetch all staff members from the database
        const staffList = await staff.find();

        // Return the list of staff members
        res.status(200).json(staffList);
    } catch (error) {
        console.error("Error fetching staff list:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post("/staff", async (req, res) => {
    try {
        const { staffId } = req.body;

        // Basic validation
        if (!staffId) {
            return res.status(400).json({ message: "Staff ID is required" });
        }

        // Find staff member by staffId
        const staffMember = await staff.findOne({ staffId });

        // Check if staff member exists
        if (!staffMember) {
            return res.status(404).json({ message: "Staff member not found" });
        }

        // Return the staff member object
        res.status(200).json(staffMember);
    } catch (error) {
        console.error("Error fetching staff member:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get("/staff/tickets", async (req, res) => {
    try {
        const { staffId } = req.query; // Retrieve staffId from query parameters
        // Basic validation
        if (!staffId) {
            return res.status(400).json({ message: "Staff ID is required in the query parameters" });
        }

        // Find staff member by staffId
        const staffMember = await staff.findById(staffId);
        if (!staffMember) {
            return res.status(404).json({ message: "Staff member not found" });
        }

        // Retrieve tickets associated with the staff member
        const ticketIds = staffMember.TicketsList; // Assuming ticketList contains ticket IDs

        // Fetch tickets from the database based on ticket IDs
        const ticketss = await tickets.find({ _id: { $in: ticketIds } });

        // Return the list of tickets associated with the staff member
        res.status(200).json({ ticketss });
    } catch (error) {
        console.error("Error fetching tickets for staff member:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post("/issue/completed", async (req, res) => {
    try {
        const { staffId, ticketId } = req.body;

        // Basic validation
        if (!staffId || !ticketId) {
            return res.status(400).json({ message: "Staff ID and Ticket ID are required" });
        }

        // Find staff member by staffId
        const staffMember = await staff.findById(staffId);
        if (!staffMember) {
            return res.status(404).json({ message: "Staff member not found" });
        }

        // Check if ticketId exists in staffMember's ticket list
        const index = staffMember.TicketsList.indexOf(ticketId);
        if (index === -1) {
            return res.status(404).json({ message: "Ticket not found in staff member's list" });
        }

        // Remove ticketId from staffMember's ticket list
        staffMember.TicketsList.splice(index, 1);

        // Save updated staff member
        await staffMember.save();

        // Update ticket status to completed
        const ticket = await tickets.findByIdAndUpdate(ticketId, { status: "completed" });

        // Return success message
        res.status(200).json({ message: "Ticket removed and status updated successfully"});
    } catch (error) {
        console.error("Error removing ticket from staff member:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;