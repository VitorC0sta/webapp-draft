const Clients = require("../../../infra/database/entities/clients");

class ShowClientsUseCase {
  async execute() {
    return await Clients.findAll();
  }
}

module.exports = ShowClientsUseCase;