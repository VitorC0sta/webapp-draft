const Users = require("../../../../infra/database/entities/users");

class ShowUsersUseCase {
  async execute() {
    return await Users.findAll();
  }
}

module.exports = ShowUsersUseCase;