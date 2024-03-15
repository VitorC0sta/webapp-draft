const { hash } = require("../../../infra/providers/hashprovider");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");

class CreateUserUseCase {
  async execute({
    name,
    email,
    nationalIdNumber,
    password,
    administrator,
    idClient,
    postalCode,
    userAddress,
    userCity,
    userState,
    userCountry,
    phoneNumber,
    birthdate,
    companyRole,
  }) {

    const chkUserExits = await Users.findOne({ where: { email } });

    if (chkUserExits) throw new AppError("[ERRO].: Email já cadastrado.");

    const hashedPassword = await hash(password, 8);

    const user = await Users.create({
      name,
      email,
      nationalIdNumber,
      password: hashedPassword,
      administrator,
      idClient,
      postalCode,
      userAddress,
      userCity,
      userState,
      userCountry,
      phoneNumber,
      birthdate: this.#stringToDate(birthdate),
      companyRole,
    });

    user.password = undefined;

    return user;
  }

  async #stringToDate(birthdate) {
    const [monthString, dayString, yearString] = await birthdate.split("/");

    const month = Number(monthString) - 1; //months in 'Date' [0-11] [jan-dec].
    const day = Number(dayString);
    const year = Number(yearString);

    await this.#dateValidation({ month, day, year });

    return new Date(month, day, year);
  }

  async #dateValidation({ month, day, year }) {
    const currentDate = new Date();
    const inputDate = new Date(year, month, day);

    const currentYear = await currentDate.getFullYear();

    if (inputDate > currentDate) {
      throw new AppError("Data futura não permitida", 401);
    }

    if (
      !(month >= 0 && month <= 11) ||
      !(day >= 1 && day <= 31) ||
      !(year >= currentYear - 130) ||
      (month === 1 && day > 29)
    ) {
      throw new AppError("Data inválida", 401);
    }
    return ;
  }
}

module.exports = CreateUserUseCase;
