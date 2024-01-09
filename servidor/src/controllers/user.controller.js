const { hash, compare } = require("bcrypt");
const { AppError } = require("../utils/AppError.js");
const Users = require("../database/entities/users.js");

class UserController {''
  async create(req, res) {
    const { name, national_id_number, password, email, id_client, administrator } = req.body;
    const requireFields = ["name", "national_id_number", "password", "email"];
    const missingFields = [];

    requireFields.forEach((field) => {
      if (!req.body[field]) missingFields.push(field);
    });
    
    if (missingFields.length > 0) {
      return res.status(401).json({
        message: `Campos em branco: ${missingFields.join(", ")}`,
      });
    }

    const chkUserExits = await Users.findOne({ where: {email: email} });

    if(chkUserExits) throw new AppError("[ERRO].: Email já cadastrado.");
    
    const hashedPassword = hash(password, 8);

    await User.create({
      name: name,
      email: email,
      national_id_number: national_id_number,
      password: hashedPassword,
      administrator: administrator,
      id_client:id_client,
    })

    return res.status(201).json({
      "message": "created" 
    });
  }


}

module.exports = UserController;
