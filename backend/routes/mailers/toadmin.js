const nodemailer = require('../../conn/nodemailer');
module.exports.toadmin = async (email) => 
{
    try {
        console.log(email)
        let info = await nodemailer.transporter.sendMail({
            from: "kvishnuprasanth2@gmail.com",
            to: email,
            subject: "test",
            html: ``
         });     return ;
       } catch (error) {
       }
}
