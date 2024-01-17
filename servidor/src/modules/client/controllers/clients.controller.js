const {object, string} = require("yup");
const CreateClientUseCase = require("../usecases/createClient.usecase.js");

const clientCreationSchema = object({
  legal_name: string().required(),
  dba_name: string().required(),
  company_id: string().required(),
  postal_code: string().required(),
  address: string().required(),
  state: string(),
  country: string().required()
})

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
}

module.exports = ClientsController;
