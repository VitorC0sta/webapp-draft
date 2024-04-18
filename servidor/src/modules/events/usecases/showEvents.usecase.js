const Clients = require("../../../infra/database/entities/clients");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const Events = require("../../../infra/database/entities/events");

class ShowClientNameUseCase {
  async execute({ userLogged }) {
    
    Events.belongsTo(Vehicles, { foreignKey: 'idVehicle' });
    Vehicles.belongsTo(Operations, { foreignKey: 'idOperation' });
    Operations.belongsTo(Clients, { foreignKey: 'idClient' });
    
    if(userLogged.isAdmin) {
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
        ]
      });
  
      return events;

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
      where: {'$Vehicle.Operation.Client.id$': userLogged.idClient }
    });

    return events;

  }
}

module.exports = ShowClientNameUseCase;
