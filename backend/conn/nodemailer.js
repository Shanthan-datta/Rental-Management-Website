const nodemailer=require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "vs.datta2003@gmail.com",
        pass: "whkm ilnz kfbb rthm"
    }

  });

  module.exports = {
    transporter: transporter
}