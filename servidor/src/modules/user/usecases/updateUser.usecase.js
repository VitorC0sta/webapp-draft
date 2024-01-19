const { hash, compare } = require("bcrypt");
const Users = require("../../../database/entities/users");
const AppError = require("../../../utils/AppError");

class UpdateUserUseCase {
  async update({
    credentialEmail, 
    isAdmin,
    id,
    newEmail,
    password,
    newPassword,
    id_client,
    administrator,
    active })
  {
    const userCheckEmail = await Users.findOneByEmail(newEmail);
    const user = await Users.findOneByEmail(credentialEmail);

    if(!user) throw new AppError("Usuário não encontrado.");

    
    if(isAdmin) {
      //administrator changes
    }
    
    if(userCheckEmail && userCheckEmail.id !== user.id) {
      throw new AppError("Email já está em uso.");
    }

    const verifyPassword = compare(password, user.password);
    
    if(verifyPassword) {
      user.password = hash(newPassword, 8);
    }
    
    const userUpdated = await Users.update(user, { where: { credentialEmail } } );
    
    userUpdated.password = undefined;

    return userUpdated;
  }
}

module.exports = UpdateUserUseCase;