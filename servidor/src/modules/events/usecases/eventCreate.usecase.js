const Events = require("../../../infra/database/entities/events");

class EventCreateUseCase {
  async execute({ idVehicle, eventName }) {

    await Events.create({
      eventName,
      idVehicle
    })
    
  }
}

module.exports = EventCreateUseCase;
