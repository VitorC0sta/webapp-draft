const ShowEventsUsecase = require("../usecases/showEvents.usecase");

class EventsController {

  async showUserEventList(req, res) {
    const list = await new ShowUserEventList().execute();

    return res.status(200).json(list);
  }
}

module.exports = EventsController;