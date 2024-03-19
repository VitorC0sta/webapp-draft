const { hash, compare } = require("../../../infra/providers/hashprovider");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");

class UpdateUserUseCase {
  async execute({
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
  }) {
    return (await userLogged.isAdmin) && id
      ? this.#userAdmin(
          idClient,
          administrator,
          id,
          newPassword,
          postalCode,
          userAddress,
          userCity,
          userState,
          userCountry,
          phoneNumber,
          companyRole,
          birthdate
        )
      : this.#loggedUser(password, newPassword, userLogged);
  }

  async #userAdmin(
    idClient,
    administrator,
    id,
    newPassword,
    postalCode,
    userAddress,
    userCity,
    userState,
    userCountry,
    phoneNumber,
    companyRole,
    birthdate
  ) {
    const user = await Users.findOne({ where: { id } });
    console.log(user);

    if (!user) throw new AppError("Usuário não encontrado.");
    try {
      user.idClient = idClient ?? user.idClient;
      user.administrator = administrator ?? user.administrator;
      user.postalCode = postalCode ?? user.postalCode;
      user.userAddress = userAddress ?? user.userAddress;
      user.userCity = userCity ?? user.userCity;
      user.userState = userState ?? user.userState;
      user.userCountry = userCountry ?? user.userCountry;
      user.phoneNumber = phoneNumber ?? user.phoneNumber;
      user.companyRole = companyRole ?? user.companyRole;
      user.birthdate = await this.#stringToDate(birthdate) ?? user.birthdate;
      newPassword ? (user.password = await hash(newPassword, 8)) : "";

    } catch (err) {
      console.log(err.message);
    }

    await user.save();

    user.password = undefined;

    return user;
  }

  async #loggedUser(password, newPassword, userLogged) {
    const userLoggedUpdate = await Users.findOne({
      where: { id: userLogged.id },
    });

    if (!userLoggedUpdate) throw new AppError("Usuário não encontrado.", 400);

    if (!password) throw new AppError("Senha incorreta e/ou vazia", 401);

    const verifyPassword = await compare(password, userLoggedUpdate.password);

    if (!verifyPassword) {
      throw new AppError("Senha inválida");
    }

    userLoggedUpdate.password = await hash(newPassword, 8);

    await userLoggedUpdate.save();

    userLoggedUpdate.password = undefined;

    return userLoggedUpdate;
  }

  async #stringToDate(birthdate) {
    const [yearString, monthString, dayString] = birthdate.split("/");

      const year = Number(yearString);
    const month = Number(monthString) - 1; //months in 'Date' [0-11] [jan-dec].
    const day = Number(dayString);

    await this.#dateValidation({ month, day, year });  useEffect( () => {
      getClientData(idClient);
    }, [getClientData, idClient]);
    
    return (new Date(year, month, day));
  }

  async #dateValidation({ month, day, year }) {
    const currentDate = new Date();
    const inputDate = new Date(year, month, day);

    console.log(`dia: ${day} - mes: ${month} - ano ${year}`)

    const currentYear = currentDate.getFullYear();
    console.log(currentDate, inputDate);
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

module.exports = UpdateUserUseCase;
