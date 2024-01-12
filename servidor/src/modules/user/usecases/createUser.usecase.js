const { hash } = require("bcrypt");
const Users = require("../../../database/entities/users");
const AppError = require("../../../utils/AppError");


class CreateUserUseCase {
  async execute({ name, email, national_id_number, password, administrator, id_client }) {
    
    const chkUserExits = await Users.findOneByEmail(email);
        
    if (chkUserExits) throw new AppError('[ERRO].: Email já cadastrado.');

    const hashedPassword = await hash(password, 8);

    const user = await Users.create({
      name,
      email,
      national_id_number,
      password: hashedPassword,
      administrator,
      id_client,
    });

    user.password = undefined;

    return user;
  }
}

module.exports = CreateUserUseCase;
