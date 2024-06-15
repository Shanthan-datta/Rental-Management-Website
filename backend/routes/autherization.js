const router = require("express").Router()
const User = require("../models/users")
const bcrypt = require("bcryptjs")
//signup
router.post("/register", async (req,res)=>{
    try {
        const {firstName, lastName, email,contactNo, password} = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({firstName, lastName, email,contactNo, password: hashpassword})
        await user.save().then((res)=>{
            
            res.status(200).json({zooma: user})
            console.log('ofiysoifd')
        })
    } catch (error) {
        res.status(400).json({message: "user already exists"})
    }
})
//signup




module.exports = router;
