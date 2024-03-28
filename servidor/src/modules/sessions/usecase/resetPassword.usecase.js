const { hash } = require("bcrypt");
const SecurityData = require("../../../infra/database/entities/security_data");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");
const { isAfter }= require("date-fns");

class ResetPasswordUseCase {
  async execute({ token, password, confirmPassword }) {
    if (password !== confirmPassword)
      throw new AppError("Senhas diferentes", 401);

    const dataRecover = await SecurityData.findOne({ where: { token } });

    const user = await Users.findOne({ where: { id: dataRecover.userId } });

    if(dataRecover.wasUsed)
      throw new AppError("Token ja foi usado ou está expirado.", 401);

    const now = new Date();

    if(isAfter(now ,dataRecover.expiresIn))
      throw new AppError("Token ja foi usado ou está expirado.", 401);

    const hashPassword = hash(password, 8);
    
    user.password = hashPassword;
    user.wasUsed = true;

    user.save();

    return user;
  }
}

module.exports = ResetPasswordUseCase;
