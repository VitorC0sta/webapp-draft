const AppError = require("../utils/AppError");

function isAdmin(req, res, next) {
  const user = req.user;

  if (!user.isAdmin) {
    throw new AppError("Acesso negado. Você não é um administrador.", 403);
  }
  
  next();
}

module.exports = isAdmin;
