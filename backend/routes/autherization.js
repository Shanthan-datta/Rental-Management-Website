const router = require('express').Router()
const user = require("../models/users")

//signup
router.post("/register", async (req,res)=>{
    try {
        const {firstName, lastName, email,contactNo, password} = req.body;
        const user = new u
    } catch (error) {
        
    }
})
//signup




module.exports = router;
