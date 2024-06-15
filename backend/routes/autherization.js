const router = require("express").Router()
const User = require("../models/users")

//signup
router.get("/register", async (req,res)=>{
    try {
        const {firstName, lastName, email,contactNo, password} = req.body;
        const user = new User({firstName, lastName, email,contactNo, password})
        await user.save().then((res)=>{
            
            res.status(200).json({user: user})
            console.log('')
        })
    } catch (error) {
        res.status(400).json({message: "user already exists"})
    }
})
//signup




module.exports = router;
