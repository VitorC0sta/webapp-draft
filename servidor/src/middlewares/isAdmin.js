const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth.js"); 

function isAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { administrator } = verify(token, authConfig.jwt.secret);

    if (administrator) {
      next();
    } else {
      throw new AppError("Acesso negado. Você não é um administrador.", 403);
    }
  } catch (error) {
    throw new AppError("Token inválido ou não contém a propriedade 'administrator'", 401);
  }
}

module.exports = isAdmin;
