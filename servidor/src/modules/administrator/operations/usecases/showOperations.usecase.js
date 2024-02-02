const Operations = require("../../../../infra/database/entities/operations");
const Vehicles = require("../../../../infra/database/entities/vehicles");

class ShowOperationsUseCase {
  async execute() {
    
    const operations = Operations.findAll({
      include: [{
        model: Vehicles,
        as: 'vehicles'
      }]
    })


    return operations
  }
}

module.exports = ShowOperationsUseCase;