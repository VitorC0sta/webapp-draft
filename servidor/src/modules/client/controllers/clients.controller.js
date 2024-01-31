const clientCreationSchema = require("../schemas/createClientSchema.js");
const CreateClientUseCase = require("../usecases/createClient.usecase.js");
const ShowClientUseCase = require("../usecases/showClient.usecase.js");


class ClientsController {
  async create(req, res) {
    const {
      legal_name,
      dba_name,
      company_id,
      city,
      postal_code,
      address,
      state,
      country,
    } = req.body;

    await clientCreationSchema.validate(req.body, { abortEarly: false });

    const client = await new CreateClientUseCase().execute({
      legal_name,
      dba_name,
      company_id,
      city,
      postal_code,
      address,
      state,
      country,
    });

    return res.status(201).json(client);
  }

  async showClient(req, res) {
    const { id } = req.params;
    const userLogged = req.user;

    const client = await new ShowClientUseCase().execute(id, userLogged);

    return res.status(200).json(client);
  } 
}

module.exports = ClientsController;
