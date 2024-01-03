import { verify } from "jsonwebtoken";
import authConfig from "../configs/auth.js";

function ensureAuthenticated(req, res, nxt) {
    const { authorization } = req.headers;
    
}