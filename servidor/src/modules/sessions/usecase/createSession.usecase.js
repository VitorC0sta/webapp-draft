const { compare } = require("bcrypt");
const Users = require("../../../database/entities/users");
const AppError = require("../../../utils/AppError");
const authConfig = require("../../../configs/auth.js");
const { sign } = require("jsonwebtoken");

class CreateSessionUseCase {
  async execute({ email, password }) {
    const user = await Users.findOneByEmail(email);

    if(!user) throw new AppError("Email e/ou senha incorreta.", 401);

    const passwordMatch = await compare(password, user.password);
    
    if(!passwordMatch) throw new AppError("Email e/ou senha incorreta.", 401);

    const {secret, expiresIn } = authConfig.jwt;

    const token = sign({payload: user, isAdmin: user.administrator}, secret, {
      subject: String(user.id),
      expiresIn
    });

    const userResponse = { ...user.dataValues };

    userResponse.password = undefined;

    return { userResponse, token};
  }
}

module.exports = CreateSessionUseCase