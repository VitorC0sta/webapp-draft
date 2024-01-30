const { compare } = require("../../../infra/providers/hashprovider");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");
const authConfig = require("../../../configs/auth.js");
const { sign } = require("jsonwebtoken");

class CreateSessionUseCase {
  async execute({ email, password }) {
    const user = await Users.find("email", email);

    if(!user) throw new AppError("Email e/ou senha incorreta.", 401);

    const passwordMatch = await compare(password, user.password);
    
    if(!passwordMatch) throw new AppError("Email e/ou senha incorreta.", 401);

    const {secret, expiresIn } = authConfig.jwt;

    const userResponse = { ...user.dataValues };

    userResponse.password = undefined;
    
    const token = sign(userResponse, secret, {
      subject: String(user.id),
      expiresIn
    });


    return { userResponse, token};
  }
}

module.exports = CreateSessionUseCase