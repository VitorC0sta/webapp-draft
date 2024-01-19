const userCreationSchema = require("../schemas/userCreationSchema.js");
const CreateUserUseCase = require("../usecases/createUser.usecase.js");

class UserController {
  async create(req, res) {
    const  {
      name,
      nationalIdNumber,
      password,
      email,
      idClient,
      administrator,
    } = req.body;

    await userCreationSchema.validate(req.body, { abortEarly: false });

    const user = await new CreateUserUseCase().execute({
      name,
      nationalIdNumber,
      password,
      email,
      idClient,
      administrator,
    });

    return res.status(201).json(user);
  }

  async update(req, res) {
    const {
      password,
      idClient,
      administrator,
      status
    } = req.body;
  }
}

module.exports = UserController;
