const { hash } = require("bcrypt");
const SecurityData = require("../../../infra/database/entities/security_data");
const Users = require("../../../infra/database/entities/users");
const { hash } = require("../../../infra/providers/hashprovider");
const AppError = require("../../../infra/utils/AppError");


class ResetPasswordUseCase {
  async execute({ token, newPassword, confirmNewPassword }) {
    if (newPassword !== confirmNewPassword)
      throw new AppError("Senhas diferentes", 401);

    const dataRecover = await SecurityData.findOne({ where: { token } });

    const user = await Users.findOne({ where: { id: dataRecover.userId } });
    
    const hashedPassword = await hash(newPassword);

    user.password = hashedPassword;

    await user.save();

    return;
  }
}

module.exports = ResetPasswordUseCase;
