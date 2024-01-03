import { hash, compare } from "bcrypt";
import { AppError } from "../utils/AppError";

export default class UserController {
  async create(req, res) {
    const { name, cpf, password, email } = req.body;

    const requireFields = ["name", "cpf", "password", "email"];
    const missingFields = [];

    requireFields.forEach((field) => {
      if (!req.body[field]) missingFields.push(field);
    });

    if (missingFields.length > 0) {
      return res.status(401).json({
        message: `Campos em branco: ${missingFields.join(", ")}`,
      });
    }

    return res.status(201).json({
      "message": "created" 
    });
  }


}
