const nodemailer=require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "kvishnuprasanth2@gmail.com",
        pass: "clqr umff oadu ylza"
    }

  });

  module.exports = {
    transporter: transporter
}