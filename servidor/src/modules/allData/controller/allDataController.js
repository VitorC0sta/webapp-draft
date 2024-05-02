const ShowAllDataUseCase = require("../usecase/showAllData.usecase");

class AllDataController {
  async showAllData(req, res) {
    const  { user } = req;

    const allData = await new ShowAllDataUseCase().execute({ user });

    return res.status(201).json(allData); 
  }
}

module.exports = AllDataController;