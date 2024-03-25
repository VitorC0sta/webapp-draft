const transporter  = require("../../../config/nodemailer.config");

async function sendEmail({resetPasswordUrl, email}) {
  const recoveryEmail = await transporter.sendMail({
    from: '"Argus Support" <support@argus.com>',
    to: email,
    subject: "Recovery Password",
    text: `Você solicitou a recuperação de senha. Clique neste link para redefinir sua senha: ${resetPasswordUrl}. Válido por 30 minutos.`,
    message: `<p>Você solicitou a recuperação de senha. Clique neste link para redefinir sua senha: <a>${resetPasswordUrl}</a></p><br/><i>Válido por 30 minutos.</i>`,
  });

  transporter.sendMail(recoveryEmail);
}


module.exports = sendEmail;