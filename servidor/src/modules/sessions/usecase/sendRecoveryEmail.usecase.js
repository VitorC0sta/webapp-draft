require('dotenv').config();

const SecurityData = require("../../../infra/database/entities/security_data");
const Users = require("../../../infra/database/entities/users");
const sendEmail = require("../../../infra/providers/sendRecoveryEmail");
const AppError = require("../../../infra/utils/AppError");
const crypto = require("crypto");

class SendRecoveryEmailUseCase {
  async  execute({ email }) {
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

      const resetPasswordUrl = process.env.APP_URL + `/reset_password?token=${token}`
      
      await sendEmail({email, resetPasswordUrl});

    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = SendRecoveryEmailUseCase;