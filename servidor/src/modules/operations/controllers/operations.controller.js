const createOperationSchema = require("../schema/createOperationsSchema");
const OperationCreateUseCase = require("../usecases/operationsCreate.usecase.js");
const ShowOperationsUseCase = require("../../operations/usecases/showOperations.usecase.js");

class OperationsController {
  async createOperation(req, res) {
    const { operationName, destinationCity, destinationRegion, destinationCountry, idClient } = req.body;
    
    await createOperationSchema.validate(req.body, { abortEarly: false });
      
    const operation = await new OperationCreateUseCase().execute(
      operationName, 
      destinationCity, 
      destinationRegion, 
      destinationCountry, 
      idClient,
    ); 

    return res.status(201).json(operation);
  }

  async showOperations(req, res) {
    const userLogged = req.user;
    const { search } = req.query;
    
    const operations = await new ShowOperationsUseCase().execute({ userLogged, search });

    return res.status(200).json(operations)

  }
}

module.exports = OperationsController;