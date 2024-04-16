const Operations = require("../../../infra/database/entities/operations");
const Clients = require("../../../infra/database/entities/clients");

class ShowOperationsUseCase {
  async execute({ userLogged }) {
    
    Clients.hasMany(Operations, {foreignKey: 'idClient'})
    Operations.belongsTo(Clients, {foreignKey: 'idClient'})

    if(userLogged.isAdmin) {
      const operations = await Operations.findAll({
        include: [
          {
            model: Clients,
            attributes: ['dbaName']
          }
        ]
      })
       
      return operations;
    }
    

    const operations = await Operations.findAll({
      include: [
        {
          model: Clients,
          attributes: ['dbaName']
        }
      ],
      where: {idClient: userLogged.idClient}
    })
     
    return operations;
      
  };
  
}

module.exports = ShowOperationsUseCase;