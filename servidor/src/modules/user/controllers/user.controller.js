const userCreationSchema = require("../schemas/userCreationSchema.js");
const CreateUserUseCase = require("../usecases/createUser.usecase.js");

class UserController {
  async create(req, res) {
    const  {
      name,
      national_id_number,
      password,
      email,
      id_client,
      administrator,
    } = req.body;

    await userCreationSchema.validate(req.body, { abortEarly: false });

    const user = await new CreateUserUseCase().execute({
      name,
      national_id_number,
      password,
      email,
      id_client,
      administrator,
    });

    return res.status(201).json(user);
  }

  async update(req, res) {
    
  }
}

module.exports = UserController;
