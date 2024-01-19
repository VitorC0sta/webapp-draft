const { hash, compare } = require("bcrypt");
const Users = require("../../../database/entities/users");
const AppError = require("../../../utils/AppError");

class UpdateUserUseCase {
  async update({
    userLogged,
    id,
    password,
    newPassword,
    idClient,
    administrator,
    active,
  }) {
    if (!user) throw new AppError("Usuário não encontrado.");

    if (userLogged.isAdmin && id) {
      const user = await Users.findOneById(id);

      user.idClient = idClient ?? user.idClient;
      user.administrator = administrator ?? user.administrator;
      user.active = active ?? user.active;
    }

    const user = await Users.findOneByEmail(userLogged.email);
    const verifyPassword = compare(password, user.password);

    if (verifyPassword) {
      user.password = hash(newPassword, 8);
    }

    const userUpdated = await Users.update(user, {
      where: { credentialEmail },
    });

    userUpdated.password = undefined;

    return userUpdated;
  }
}

module.exports = UpdateUserUseCase;
