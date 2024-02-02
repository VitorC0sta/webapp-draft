const ShowOperationUseCase = require("../usecases/showOperation.usecase");
const ShowOperationsUseCase = require("../usecases/showOperations.usecase");

class OperationsController {
  async showOperations(req, res) {
    const operations = await new ShowOperationsUseCase().execute();

    return res.status(200).json(operations);
  }

  async showOperation(req, res) {
    const { id } = req.params;

    const operation = await new ShowOperationUseCase().execute(id);

    return res.status(200).json(operation);
  }
}

module.exports = OperationsController;