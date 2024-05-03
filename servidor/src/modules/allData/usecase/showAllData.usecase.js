const Clients = require("../../../infra/database/entities/clients");
const Events = require("../../../infra/database/entities/events");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const Users = require("../../../infra/database/entities/users");


const { getDay } = require('date-fns');
const { Client } = require("pg");

class ShowAllDataUseCase {
  async execute({ userLogged }) {

    Events.belongsTo(Vehicles, { foreignKey: "idVehicle" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });
    Operations.belongsTo(Clients, { foreignKey: "idClient" });
        
    const totalVehicles = await Vehicles.count({
      include: [
        {
          model: Operations,
          attributes: []
        }
      ],
      where: userLogged.isAdmin? {} : {'$Operation.id_client$': userLogged.idClient,}
    });

    const totalUsers = await Users.count({ where: userLogged.isAdmin? {} : { idClient: userLogged.idClient } });

    const totalOperations = await Operations.count({ where: userLogged.isAdmin? {} : { idClient: userLogged.idClient } });
    
    const totalEvents = await Events.count({
      include: [
        {
          model: Vehicles, 
          attributes: [],
          include: [{
            model: Operations,
            attributes: [],
            include: [{
              model: Clients,
              attributes: []
            }]
          }]
        }
      ],
      where: userLogged.isAdmin? {} : { '$Vehicle.Operation.Client.id$': userLogged.idClient }
    });

    return {
      vehicles: {
        total: totalVehicles,
      },
      users: {
        total: totalUsers,
      },
      events: {
        total: totalEvents,
      },
      operations: {
        total: totalOperations,
      }
    };
  }
}

module.exports = ShowAllDataUseCase;