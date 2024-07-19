const mongoose = require("mongoose")
const conn = async (req,res) =>{
    try {

        await mongoose.
        connect(process.env.MONGO_URL,{
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
 