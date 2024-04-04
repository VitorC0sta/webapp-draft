const Clients = require("../../../infra/database/entities/clients");
const AppError = require("../../../infra/utils/AppError");

class CreateClientUseCase {
  async execute({
    address,
    city,
    companyEmail,
    companyId,
    companyPhone,
    country,
    dbaName,
    legalName,
    postalCode,
    state,
  }) {
    const chkClientExists = await Clients.findOne({
      where: { companyId: companyId.value },
    });

    if (chkClientExists) throw new AppError("[ERRO].: Cliente já cadastrado.");

    const client = await Clients.create({
      address,
      city,
      companyEmail,
      companyId,
      companyPhone,
      country,
      dbaName,
      legalName,
      postalCode,
      state,
    });

    return client;
  }
}

module.exports = CreateClientUseCase;
