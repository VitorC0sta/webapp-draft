const CreateUserUseCase = require("../usecases/createUser.usecase.js");
const { object, string, boolean, number } = require("yup");

const userCreationSchema = object({
  name: string().required(),
  national_id_number: string().required(),
  password: string().min(8, "Minimo 8 caracteres").required(),
  email: string().email().required(),
  id_client: number(),
  administrator: boolean().required(),
});

class UserController {
  async create(req, res) {
    const {
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

  async update(req, res) {}
}

module.exports = UserController;
