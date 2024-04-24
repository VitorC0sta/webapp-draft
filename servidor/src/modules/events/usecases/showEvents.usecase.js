const Clients = require("../../../infra/database/entities/clients");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const Events = require("../../../infra/database/entities/events");
const { Op, Sequelize } = require("sequelize");

class ShowEventsUseCase {
  async execute({ userLogged, search }) {
    
    Events.belongsTo(Vehicles, { foreignKey: 'idVehicle' });
    Vehicles.belongsTo(Operations, { foreignKey: 'idOperation' });
    Operations.belongsTo(Clients, { foreignKey: 'idClient' });
    
    search !== undefined ? search = search.toLowerCase() : null;
    
    let where = search ? {
      [Op.or]: [
        { id: Number.isNaN(search)? search : null },
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("event_name")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("Vehicle.vehicle_plate")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("Vehicle.Operation.Client.dba_name")), {
          [Op.substring]: search
        })         
      ],
    } : {};

    if(!userLogged. isAdmin) {
      where = {
        ...where,
        '$Vehicle.Operation.Client.id$': userLogged.idClient
      }
    }

    const events = await Events.findAll({
      include: [
        {
          model: Vehicles,
          attributes: ['vehiclePlate'],
          include: [
            {
              model: Operations,
              attributes: ['operationName'],
              include: [
                {
                  model: Clients,
                  attributes: ['dbaName']
                }
              ]
            }
          ]
        }
      ], 
      where: where,
    });

    return events;

  }
}

module.exports = ShowEventsUseCase;
