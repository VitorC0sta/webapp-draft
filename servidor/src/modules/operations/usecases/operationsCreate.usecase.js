const Operations = require("../../../infra/database/entities/operations");
const AppError = require("../../../infra/utils/AppError.js");

class OperationCreateUseCase {
  async execute(operationName, destinationCity, destinationRegion, destinationCountry, idClient) {
    const chkOperation = await Operations.findOne({where: { operationName } });

    if(chkOperation) throw new AppError("Operação existente", 403);

    const operation = await Operations.create({
      operationName,
      destinationCity,
      destinationRegion,
      destinationCountry,
      idClient
    });

    return operation;
  }
}

module.exports = OperationCreateUseCase;