const Operations = require("../../../../infra/database/entities/operations");
const Vehicles = require("../../../../infra/database/entities/vehicles");
const AppError = require("../../../../infra/utils/AppError");

class ShowOperationUseCase {
  async execute( id ) {
    
    const operations = Operations.findOne({
      where: { id },
      include: [{
        model: Vehicles,
        as: 'vehicles'
      }]
    })

    if(!operations) throw new AppError("Operação não existe.", 404);

    return operations
  }
}

module.exports = ShowOperationUseCase;