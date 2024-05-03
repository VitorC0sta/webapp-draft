const ShowLastEventsUseCase = require("../usecases/lastEvents.usecase");
const ShowEventsUseCase = require("../usecases/showEvents.usecase");
const ShowLastDaysEventsUseCase = require("../usecases/showLastDaysEvents.usecase");

class EventsController {
  async showEvents(req, res) {
    const userLogged  = req.user;

    const { search } = req.query;
    
    const list = await new ShowEventsUseCase().execute({ userLogged, search });

    return res.status(200).json(list);
  }

  async showLastEvents(req, res) {
    const userLogged = req.user;
    
    const list = await new ShowLastEventsUseCase().execute({ userLogged });

    return res.status(200).json(list);
  }

  async showLastDaysEvents(req , res) {
    const userLogged = req.user;

    const events = await new ShowLastDaysEventsUseCase().execute({ userLogged });

    return res.status(201).json(events);
  }
}

module.exports = EventsController;