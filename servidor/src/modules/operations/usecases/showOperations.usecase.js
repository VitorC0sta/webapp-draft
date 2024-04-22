const Operations = require("../../../infra/database/entities/operations");
const Clients = require("../../../infra/database/entities/clients");
const { Op, Sequelize } = require("sequelize");

class ShowOperationsUseCase {
  async execute({ userLogged, search }) {

    search = search.toLowerCase();

    Clients.hasMany(Operations, {foreignKey: 'idClient'});
    Operations.belongsTo(Clients, {foreignKey: 'idClient'});

    let where = search ? {
      [Op.or]: [
        { id: Number.isNaN(search) ? search : null },
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('operation_name')), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('destination_city')), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('destination_region')), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('destination_country')), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col('Client.dba_name')), {
          [Op.substring]: search,
        }),
      ]
    } : {}; 

    if(!userLogged.isAdmin) {
      where = {
        ...where,
        '$Client.id$': userLogged.idClient
      }
    }

    const operations = await Operations.findAll({
      include: [
        {
          model: Clients,
          attributes: ['dbaName']
        }
      ],
      where: where,
    })
     
    return operations;
  };
  
}

module.exports = ShowOperationsUseCase;