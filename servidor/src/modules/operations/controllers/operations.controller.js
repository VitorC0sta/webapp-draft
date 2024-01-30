const createOperationSchema = require("../schema/createOperationsSchema");
const OperationCreateUseCase = require("../usecases/operationsCreate.usecase.js");

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
}

module.exports = OperationsController;