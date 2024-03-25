const SecurityData = require("../../../infra/database/entities/security_data");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");

class ResetPasswordUseCase {
  async execute({token, password, confirmPassword}) {
    try {
      if(password !== confirmPassword) 
        throw new AppError("Senhas diferentes", 401);
      
      const dataRecover = await SecurityData.findOne({ where: { token } });

      const user = await Users.findOne({ where: { id: dataRecover.userId } });

                                                                                                                                                                                                        

    } catch ( err ) {

    }
  }
}

module.exports = ResetPasswordUseCase;