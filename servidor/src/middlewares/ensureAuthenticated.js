const verify = require("jsonwebtoken");
const authConfig = require("../configs/auth.js");

function ensureAuthenticated(req, res, nxt) {
    const { authorization } = req.headers;
    

}

module.exports = ensureAuthenticated;