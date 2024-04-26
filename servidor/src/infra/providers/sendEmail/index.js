const transporter  = require("../../../config/nodemailer.config");

async function sendEmail({ userEmail, subject, text , message}) {
  const email = await transporter.sendMail({
    from: '"Argus Support" <no-reply@argus.com>',
    to: userEmail,
    subject: subject,
    text: text,
    message: message,
  });

  transporter.sendMail(email);
}


module.exports = sendEmail;