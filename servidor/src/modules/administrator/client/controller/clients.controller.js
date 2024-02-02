const ShowClientsUseCase = require("../usecases/showClients.usecase");
const UpdateClientUseCase = require("../usecases/updateClient.usecase");

class ClientsController  {
  async showClients(req, res) {
    const clients = await new ShowClientsUseCase().execute();

    return res.status(200).json(clients);  
  }

  async updateClient(req, res) {
    const {
      id, 
      postalCode,
      address,
      city,
      state,
      country,
      active
    } = req.body;

    const clientUpdated  = await new UpdateClientUseCase().execute(
      id, 
      postalCode,
      address,
      city,
      state,
      country,
      active
    )

   return res.status(200).json(clientUpdated);
  }

  async deleteClient(req, res) {
    const { id } = req.body;

    const client = await new DeleteUserUseCase().execute(id);

    return res.status(200).json(client);
  }
}

module.exports = ClientsController;
