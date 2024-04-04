const Clients = require("../../../../infra/database/entities/clients");
const AppError = require("../../../../infra/utils/AppError");
const updateClientSchema = require("../schemas/updateClientSchema");

class UpdateClientUseCase {
  async execute(
      id, 
      postalCode,
      address,
      city,
      state,
      country,
      active,
      companyPhone,
      companyEmail
  ) {

    const client = await Clients.findOne({where: { id } });

    if(!client) throw new AppError("Cliente não encontrado.", 400);

    await updateClientSchema.validate(req.body, { abortEarly: false });
  
    if(!active && client.active) {
      client.active = client.active;
    } else {
      client.active = active ?? client.active;
    }

    client.postalCode = postalCode ?? client.postalCode;
    client.address = address ?? client.address;
    client.city = city ?? client.city;
    client.state = state ?? client.state;
    client.country = country ?? client.country;
    client.companyPhone = companyPhone ?? client.companyPhone;
    client.companyEmail = companyEmail ?? client.companyEmail;
    
    await client.save();

    return client;
  }
}

module.exports = UpdateClientUseCase;