const Events = require("../../../infra/database/entities/events");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const Clients = require("../../../infra/database/entities/clients");  
class ShowLastEventsUseCase {
  async execute({ userLogged }) {

    let where;

    Events.belongsTo(Vehicles, { foreignKey: 'idVehicle' });
    Vehicles.belongsTo(Operations, { foreignKey: 'idOperation' });
    Operations.belongsTo(Clients, { foreignKey: 'idClient' });

    if(!userLogged.isAdmin) {
      where = {
        id: userLogged.idClient
      }
    }

    const lastEvents = await Events.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Vehicles,
          attributes: ['vehiclePlate'],
          include: [
            {
              model: Operations,
              attributes: [],
              include: [
                {
                  model: Clients,
                  attributes: [],
                  where: where,
                }
              ]
            }
          ]
        }
      ], 
    });

    return lastEvents
  }
}

module.exports = ShowLastEventsUseCase;