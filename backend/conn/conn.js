const mongoose = require("mongoose")
const conn = async (req,res) =>{
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.

        connect("mongodb://localhost:27017/3wayassist",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).
        then(()=>{console.log("connected")})
    } catch (error) {
        console.log(error)
        res.status(404).json({message:"not found"})
    }
}
conn()
 