const ShowUsersUseCase = require("../usecases/showUsers.usecase");

class UserController {
  async showUsers(req, res) {
    const { search } = req.query;

    const users = await new ShowUsersUseCase().execute({ search });

    return res.status(200).json(users);
  }
}

module.exports = UserController;