const router = require("express").Router()
const User = require("../models/users")
const bcrypt = require("bcryptjs")


//signup
router.post("/register", async (req,res)=>{
    try {
        const {firstName, lastName, email,contactNo, password} = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({firstName, lastName, email,contactNo, password: hashpassword})
        await user.save();
            
            res.status(200).json({zooma: user})
            
        
    } catch (error) {
        res.status(400).json({message: "user already exists"})
    }
})
//signup

//login
router.post("/Login", async (req,res)=>{
    try {
        var user = await User.findOne({email: req.body.email})
        const useror = await User.findOne({contactNo: req.body.email})        
        if(!(user || useror)){
            res.status(400).json({message: "please sign up first"})
        }
        if(!user){
            user= useror
        }
        const checkpassword = bcrypt.compareSync(
            req.body.password,
            user.password)
            if(!checkpassword){
                res.status(400).json({message: "wrong password"})
            }
            const {password, ...others} = user._doc
            res.status(200).json({others})
    } catch (error) {
        res.status(400).json({message: "wrong email or password"})
    }
})



module.exports = router;
