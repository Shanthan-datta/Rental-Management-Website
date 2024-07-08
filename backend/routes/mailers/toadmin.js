const nodemailer = require('../../conn/nodemailer');
module.exports.toadmin = async (email) => 
{
    try {
        console.log(email)
        let info = await nodemailer.transporter.sendMail({
            from: "vs.datta2003@gmail.com",
            to: email,
            subject: "test",
            html: ``
         });     console.log('email sent');

       } 
       catch (error) {
        console.log(error)
       }
}
