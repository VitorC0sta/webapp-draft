const { hash, compare } = require('bcrypt');
const AppError  = require('../utils/AppError.js');
const Users = require('../database/entities/users.js');

class UserController {''
  async create(req, res) {
    const {
      name,
      national_id_number,
      password,
      email,
      id_client,
      administrator,
    } = req.body;


    const hashedPassword = await hash(password, 8);

    await Users.create({
      name: name,
      email: email,
      national_id_number: national_id_number,
      password: hashedPassword,
      administrator: administrator,
      id_client: id_client,
    });

    return res.status(201).json({
      message: 'created',
    });
  }
}

module.exports = UserController;
