const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/clients");
const Users = require("../../../infra/database/entities/users");
const Events = require("../../../infra/database/entities/events");

const { getDay } = require('date-fns');

class ShowAllDataUseCase {
  async execute({ userLogged }) {
        
    const totalVehicles = await Vehicles.count();

    const totalUsers = await Users.count();

    const totalOperations = await Operations.count();
    
    const totalEvents = await Events.count();

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