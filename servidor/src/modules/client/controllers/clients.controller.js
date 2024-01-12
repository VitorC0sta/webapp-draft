const Clients = require('../../../database/entities/clients.js');

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
      country
    } = req.body;
  
  
   const client =  await Clients.create({
      legal_name,
      dba_name,
      company_id,
      city,
      postal_code,
      address,
      state,
      country
    });
  
    return res.status(201).json(client);
  }

  
}

module.exports = ClientsController;