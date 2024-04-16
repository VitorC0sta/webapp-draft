const Events = require("../../../infra/database/entities/events");

class ShowEventsUseCase {
  async execute({userLogged}) {
    if(userLogged.isAdmin) {
      const events = await Events.findAll()
      return events;
    }
    
    

  }
}

module.exports = ShowEventsUseCase;