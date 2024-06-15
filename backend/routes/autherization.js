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

//login
router.post("/register", async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user){
            res.status(400).json({message: "please sign up first"})
        }
        const checkpassword = bcrypt.compareSync(req.body.password,user.password)
    } catch (error) {
        res.status(400).json({message: "wrong email or password"})
    }
})



module.exports = router;
