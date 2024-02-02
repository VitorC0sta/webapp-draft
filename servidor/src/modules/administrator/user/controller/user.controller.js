const ShowUsersUseCase = require("../usecases/showUsers.usecase");

class UserController {
  async showUsers(req, res) {
    
    const users = await new ShowUsersUseCase().execute();

    return res.status(200).json(users);
  }
}

module.exports = UserController;