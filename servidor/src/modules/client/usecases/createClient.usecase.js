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
      where: { companyId },
    });

    if (chkClientExists) throw new AppError("[ERRO].: Cliente já cadastrado.");

    try {
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
    } catch (err) {
      console.log(err);      
    }


  }
}

module.exports = CreateClientUseCase;
