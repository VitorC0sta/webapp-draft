const Users = require("../../../../infra/database/entities/users");

class ShowUsersUseCase {
  async execute() {
    const users = (await Users.findAll()).map(user => {
      user.password = undefined;
      return user;
    }); 
    
    return users;
  }
}

module.exports = ShowUsersUseCase;