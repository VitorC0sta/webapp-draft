const { hash, compare } = require("../../../infra/providers/hashprovider");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");

class UpdateUserUseCase {
  
  async execute({
    userLogged,
    id,
    password,
    newPassword,
    idClient,
    administrator,
  }) {

    return await userLogged.isAdmin && id ?
      this.#userAdmin(idClient, administrator, id, newPassword) : this.#loggedUser(password, newPassword, userLogged); 

  }

  async #userAdmin(idClient, administrator, id, newPassword) {
    const user = await Users.find("id", id);
      
      if (!user) throw new AppError("Usuário não encontrado.");
      
      user.idClient = idClient ?? user.idClient;
      user.administrator = administrator ?? user.administrator;
      user.password = await hash(newPassword,8) ?? user.password;

      await user.save();

      user.password = undefined;
      
      return user;
  }

  async #loggedUser(password, newPassword, userLogged) {
    const userLoggedUpdate = await Users.find("id", userLogged.id);

    if (!userLoggedUpdate) throw new AppError("Usuário não encontrado.");

    const verifyPassword = await compare(password, userLoggedUpdate.password);

    if (!verifyPassword) {
      throw new AppError("Senha inválida");
    }

    userLoggedUpdate.password = await hash(newPassword, 8) ;

    await userLoggedUpdate.save();

    userLoggedUpdate.password = undefined;

    return userLoggedUpdate;
  }
}

module.exports = UpdateUserUseCase;
