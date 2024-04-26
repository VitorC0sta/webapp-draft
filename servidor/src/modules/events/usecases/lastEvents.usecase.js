const Clients = require("../../../infra/database/entities/clients");
const Events = require("../../../infra/database/entities/events");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");

class ShowLastEventsUseCase {
  async execute({ user }) {

    let where = {};

    Events.belongsTo(Vehicles, { foreignKey: 'idVehicle' });
    Vehicles.belongsTo(Operations, { foreignKey: 'idOperation' });
    Operations.belongsTo(Clients, { foreignKey: 'idClient' });

    if(!user.isAdmin) {
      where = {
        '$Vehicle.Operation.Client.id$': user.idClient,
      }
    }

    const lastEvents = await Events.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Vehicles,
          attributes: ['vehiclePlate'],
        }
      ], 
      where: where,
    });

    return lastEvents
  }
}

module.exports = ShowLastEventsUseCase;