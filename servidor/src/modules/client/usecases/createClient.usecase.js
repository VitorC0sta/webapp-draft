const Clients = require("../../../infra/database/entities/clients");
const AppError = require("../../../infra/utils/AppError");

class CreateClientUseCase {
  async execute({
    legalName,
    dbaName,
    companyId,
    city,
    postalCode,
    address,
    state,
    country,
  }) {
    const chkClientExists = await Clients.findOne({ where: {companyId: companyId.value } });

    if (chkClientExists) throw new AppError("[ERRO].: Cliente já cadastrado.");

    const client = await Clients.create({
      legalName,
      dbaName,
      companyId,
      city,
      postalCode,
      address,
      state,
      country,
    });

    return client;
  }
}

module.exports = CreateClientUseCase;
