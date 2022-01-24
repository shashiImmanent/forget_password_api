const nodemailer = require('nodemailer');

const sendEmail = async(email,subject,text)=>{
    try{
  const transporter = nodemailer.createTransport({
      host:process.env.Host,
      serive:process.env.Service,
      port:587,
      secure:true,
      auth:{
          user :process.env.User,
          pass:process.env.Pass,
      }

  });
   await transporter.sendMail({
    from: process.env.USER,
    to: email,
    subject: subject,
    text: text,

   });

   console.log("email sent successfully");

    }catch{
      console.log("email not sent");
    }
}

module.exports = sendEmail;