const { hash } = require("../../../infra/providers/hashprovider");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");
const sendEmail = require("../../../infra/providers/sendEmail");

class CreateUserUseCase {
  async execute({
    name,
    email,
    nationalIdNumber,
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

    const password =  Math.random().toString(36).slice(-8);

    const hashedPassword = await hash(password, 8);

    const subject = "Your password";
    const text = `Aqui está sua senha para acesso no portal Argus App: ${password}.`;
    const message = `<p>Aqui está sua senha para acesso no portal Argus App: ${password}</p>`;

    await sendEmail({ userEmail: email, subject, text, message });

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
      birthdate: new Date(birthdate),
      companyRole,
    });
    
    user.password = undefined;

    return user;
  }
}

module.exports = CreateUserUseCase;
