const Clients = require("../../../../infra/database/entities/clients");
const AppError = require("../../../../infra/utils/AppError");

class DeleteClientUseCase {
  async execute(id) {
    const client = Clients.findOne({where: {id} });

    if(!client.active) throw new AppError("Cliente já inativo.");

    client.active = false;

    return client
  }
}