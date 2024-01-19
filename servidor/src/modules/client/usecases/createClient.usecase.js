const Clients = require("../../../database/entities/clients");
const AppError = require("../../../utils/AppError");

class CreateClientUseCase {
  async execute({
    legal_name,
    dba_name,
    company_id,
    city,
    postal_code,
    address,
    state,
    country,
  }) {
    const chkClientExists = await Clients.findOneByCompanyId(company_id);

    if (chkClientExists) throw new AppError("[ERRO].: Cliente já cadastrado.");

    const client = await Clients.create({
      legal_name,
      dba_name,
      company_id,
      city,
      postal_code,
      address,
      state,
      country,
    });

    return client;
  }
}

module.exports = CreateClientUseCase;
