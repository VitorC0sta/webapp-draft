const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError.js");
const authConfig = require("../configs/auth.js");


function ensureAuthenticated(req, res, nxt) {
    const authHeader  = req.headers.authorization;
    
    if(!authHeader) throw new AppError("Token não informado", 401);

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);
       
        req.user = {
            id: Number(user_id)
        } 

        return nxt();

    } catch {
        throw new AppError("JWT inválido");
    }

}

module.exports = ensureAuthenticated;