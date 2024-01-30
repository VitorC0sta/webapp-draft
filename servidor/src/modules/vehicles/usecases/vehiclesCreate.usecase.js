const Vehicles = require("../../../infra/database/entities/vehicles");
const AppError = require("../../../infra/utils/AppError");
class VehiclesCreateUseCase { 
  async execute(vehicleName, vehicleColor, vehicleModel, vehiclePlate, idOperation) {
    const chkVehicleExits = await Vehicles.findOne({where: { vehiclePlate } });
    
    if(chkVehicleExits) throw new AppError("Veículo já existe e/ou dados incorretos.",401);

    const vehicle = await Vehicles.create({
      vehicleName,
      vehicleColor,
      vehicleModel,
      vehiclePlate,
      idOperation
    });

    return vehicle;
  }
}

module.exports = VehiclesCreateUseCase;