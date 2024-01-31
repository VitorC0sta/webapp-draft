const createOperationSchema = require("../schema/createOperationsSchema");
const OperationCreateUseCase = require("../usecases/operationsCreate.usecase.js");
const ShowOperationUseCase = require("../usecases/showOperation.usecase.js");

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

  async showOperation(req, res) {
    const { id } = req.params;
    const userLogged = req.user;
    
    const operation = await new ShowOperationUseCase().execute(id, userLogged);
    

    return res.status(200).json(operation);
  }
}

module.exports = OperationsController;