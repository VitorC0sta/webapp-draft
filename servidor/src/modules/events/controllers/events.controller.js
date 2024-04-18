const ShowEventsUseCase = require("../usecases/showEvents.usecase");

class EventsController {
  async showEvent() {

  }
  async showEvents(req, res) {
    const userLogged  = req.user

    const list = await new ShowEventsUseCase().execute({ userLogged });

    return res.status(200).json(list);
  }
}

module.exports = EventsController;