require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: "maskotmahasiswa@gmail.com",
  to: "cieguz59@gmail.com, rifqi.upm@gmail.com",
  subject: "Testing And Testing",
  text: "It works",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error Occurs", err);
  } else {
    console.log("Email sent ", data);
  }
});
