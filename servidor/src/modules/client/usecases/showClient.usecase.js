const Clients = require("../../../infra/database/entities/clients");
const AppError = require("../../../infra/utils/AppError");

class ShowClientUseCase {
  async execute( id, userLogged ) {
    if(!userLogged.isAdmin && id !== userLogged.idClient) {
      throw new AppError("Sem autorização para acessar dados solicitados.", 403);
    }

    const client = await Clients.findOne({ 
      where: { id },
    });


    return client;
  }
}

module.exports = ShowClientUseCase;