const { subDays, getDay } = require("date-fns");
const Clients = require("../../../infra/database/entities/clients");
const Events = require("../../../infra/database/entities/events");
const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const { Op } = require("sequelize");

class ShowLastDaysEventsUseCase {
  async execute({ userLogged }) {
    let where = {
      createdAt: {
        [Op.gte]: subDays(new Date(), 100),
      },
    };

    const lastEventsInWeek = [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        name: "Bêbado",
        color: "#A2CDF0",
      },
      {
        data: [0,0,0,0,0,0,0],
        name: "Condução perigosa",
        color:  "#FFC184",
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        name: "Sonolência",
        color: "#C1F1C0",
      },
      {
        data: [0,0,0,0,0,0,0],
        name: "Cinto de Segurança",
        color: "#2E2E2E",
      }
    ];

    Events.belongsTo(Vehicles, { foreignKey: "idVehicle" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });
    Operations.belongsTo(Clients, { foreignKey: "idClient" });

    if (!userLogged.isAdmin) {
      where = {
        ...where,
        "$Vehicle.Operation.Client.id$": userLogged.idClient,
      };
    }

    const lastEvents = await Events.findAll({
      include: [
        {
          model: Vehicles,
          attributes: [],
          include: [
            {
              model: Operations,
              attributes: [],
              include: [
                {
                  model: Clients,
                  attributes: [],
                }
              ]
            }
          ]
        }
      ], 
      where: where,
    });


    lastEventsInWeek.forEach(lastEventInWeek => {
      lastEvents.forEach( lastEvent => {
        const weekday = getDay(lastEvent.dataValues.createdAt);
        if(lastEvent.dataValues.eventName === lastEventInWeek.name) {
         lastEventInWeek.data[weekday] += 1;
        }
      });  
    });

    return lastEventsInWeek;
  }
}

module.exports = ShowLastDaysEventsUseCase;
