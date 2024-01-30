const ShowUserEventList = require("../usecases/showUserList.usecase");

class EventsController {

  async showUserEventList(req, res) {
    const { plate } = req.query;

    const list = await new ShowUserEventList().execute(plate);

    return res.status(200).json(list);
  }
}

module.exports = EventsController;