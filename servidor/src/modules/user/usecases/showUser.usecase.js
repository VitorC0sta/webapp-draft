const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");

class ShowUserUseCase {
  async execute(id) {
    const user = await Users.findOne({ where: { id } });
    
    if(!user) throw new AppError("Usuário não existente.", 403);
        
    user.password = undefined;
    
    return user;
  }
}

module.exports = ShowUserUseCase;