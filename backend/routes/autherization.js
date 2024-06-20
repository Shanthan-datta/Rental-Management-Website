const router = require("express").Router()
const User = require("../models/users")
const bcrypt = require("bcryptjs")


//signup
router.post("/register", async (req,res)=>{
    try {
        const {fullName, email,contactNo, password } = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({fullName, email,contactNo, password: hashpassword ,})
        await user.save();
            
            res.status(200).json({message: "succesfully registered"})
            
        
    } catch (error) {
        res.status(200).json({message: "user already exists"})
    }
})
//signup

//login
router.post("/Login", async (req,res)=>{
    try {
        const useremail = await User.findOne({email: req.body.email})
     
        if(!(useremail)){
            res.status(200).json({message: "please sign up first"})
        }
        const checkpassword = bcrypt.compareSync(
            req.body.password,
            useremail.password)
            if(!checkpassword){
                res.status(200).json({message: "wrong password"})
            }
            const {password, ...others} = useremail._doc
            res.status(200).json({others})
    } catch (error) {
        res.status(200).json({message: "error"})
    }
})



module.exports = router;
