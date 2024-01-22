const AppError = require("../../../infra/utils/AppError");

class DeleteUserUseCase {
  async execute ( id, email, userLogged) {
    this.#verifyAdmin(userLogged);

    const user = 0;

  }

  async #verifyAdmin(userLogged) {
    const { isAdmin } = userLogged;

    if(!isAdmin) throw new AppError("Operação negada. ");

    return ;
  }
}

module.exports = DeleteUserUseCase;