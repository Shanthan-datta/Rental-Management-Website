
module.exports.toAdmin = async (email) => 
{
    try {
        
        let info = await nodemailer.transporter.sendMail({
            from: process.env.AUTH_MAILER_EMAIL,
            to: email,
            subject: "test",
            html: ``
         });     return ;
       } catch (error) {
       }
}
