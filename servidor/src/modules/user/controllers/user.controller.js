const userCreationSchema = require("../schemas/userCreationSchema.js");
const userUpdateSchema = require("../schemas/userUpdateSchema.js");
const userDeleteSchema = require("../schemas/userDeleteSchema.js");
const CreateUserUseCase = require("../usecases/createUser.usecase.js");
const UpdateUserUseCase = require("../usecases/updateUser.usecase.js");
const ShowUserUseCase = require("../usecases/showUser.usecase.js");
class UserController {
  async create(req, res) {
    const {
      name,
      nationalIdNumber,
      password,
      email,
      idClient,
      administrator,
      postalCode,
      userAddress,
      userCity,
      userState,
      userCountry,
      phoneNumber,
      birthdate,
      companyRole
    } = req.body;

    await userCreationSchema.validate(req.body, { abortEarly: false });

    const user = await new CreateUserUseCase().execute({
      name,
      nationalIdNumber,
      password,
      email,
      idClient,
      administrator,
      postalCode,
      userAddress,
      userCity,
      userState,
      userCountry,
      phoneNumber,
      birthdate,
      companyRole
    });

    return res.status(201).json(user);
  }

  async update(req, res) {
    const {
      id,
      password,
      newPassword,
      idClient,
      administrator,
      postalCode,
      userAddress,
      userCity,
      userState,
      userCountry,
      phoneNumber,
      birthdate,
      companyRole
    } = req.body;

    await userUpdateSchema.validate(req.body, { abortEarly: false });

    const userLogged = req.user;

    const user = await new UpdateUserUseCase().execute({
      userLogged,
      id,
      password,
      newPassword,
      idClient,
      administrator,
      postalCode,
      userAddress,
      userCity,
      userState,
      userCountry,
      phoneNumber,
      companyRole,
      birthdate,
    });

    return res.status(200).json(user);
  }

  async delete(req, res) {
    const { id, email } = req.body;

    const userLogged = req.user;

    await userDeleteSchema.validate(req.body, { abortEarly: false });

    const user = await new DeleteUserUseCase(id, email, userLogged).execute();

    return res.status(200).json({ message: "User Deleted", user });
  }

  async showUser(req, res) {
    const { id } = req.params;

    const user = await new ShowUserUseCase().execute(id);

    res.status(200).json(user);
  }
}

module.exports = UserController;
