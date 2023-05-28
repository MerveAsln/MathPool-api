import nodemailer from "nodemailer";

const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "merveeersennn@gmail.com",
    pass: process.env.MAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  ignoreTLS: true,
});

const sendMailOfUser = async (pEmail) => {
  const emailOptions = {
    from: "merveeersennn@gmail.com",
    to: pEmail,
    subject: pEmail.title,
    html: "Welcome to Bloggy",
    attachements: [],
  };

  gmailTransporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else console.log(info);
  });
};

export default { sendMailOfUser };
