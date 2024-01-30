const Vehicles = require("../../../infra/database/entities/vehicles")

 class ShowVehiclesUseCase {
  async execute() {
    return await Vehicles.findAll();
  }
 }

 module.exports = ShowVehiclesUseCase;