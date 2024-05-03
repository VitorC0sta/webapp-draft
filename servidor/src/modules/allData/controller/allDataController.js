const ShowAllDataUseCase = require("../usecase/showAllData.usecase");

class AllDataController {
  async showAllData(req, res) {
    const  userLogged = req.user;

    const allData = await new ShowAllDataUseCase().execute({ userLogged });

    return res.status(201).json(allData); 
  }
}

module.exports = AllDataController;