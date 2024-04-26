require('dotenv').config();

const SecurityData = require("../../../infra/database/entities/security_data");
const Users = require("../../../infra/database/entities/users");
const sendEmail = require("../../../infra/providers/sendEmail");
const AppError = require("../../../infra/utils/AppError");
const crypto = require("crypto");

class SendRecoveryEmailUseCase {
  async  execute({email}) {
    try {
      const user = await Users.findOne({ where: {email} });

      if(!user) {
        throw new AppError("Email e/ou usuário inválido", 401);
      }

      const token = crypto.randomBytes(20).toString('hex');

      const expiresIn = new Date();

      expiresIn.setMinutes(expiresIn.getMinutes() + 30);

      await SecurityData.create({
        userId: user.id,
        token,
        expiresIn
      });

      const resetPasswordUrl = process.env.APP_URL + `/reset_password?token=${token}`;
      
      const subject = "Recovery Password";
      const text = `Você solicitou a recuperação de senha. Clique neste link para redefinir sua senha: ${resetPasswordUrl}. Válido por 30 minutos.`;
      const message = `<p>Você solicitou a recuperação de senha. Clique neste link para redefinir sua senha: <a>${resetPasswordUrl}</a></p><br/><i>Válido por 30 minutos.</i>`;

      await sendEmail({userEmail: email, subject, text, message});

    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = SendRecoveryEmailUseCase;