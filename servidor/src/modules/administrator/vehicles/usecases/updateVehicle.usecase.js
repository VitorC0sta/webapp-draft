const Vehicles = require("../../../../infra/database/entities/vehicles");
const AppError = require("../../../../infra/utils/AppError");

class UpdateVehicleUseCase {
  async execute(
      id,
      vehicleName,
      vehicleColor,
      vehicleModel,
      vehiclePlate,
      idOperation
  ) {

    const vehicle = await Vehicles.findOne({ where: { id } });

    if(!vehicle) throw new AppError("Veiculo não encontrado");

    vehicle.vehicleName = vehicleName ?? vehicle.vehicleName;
    vehicle.vehicleColor = vehicleColor ?? vehicle.vehicleColor;
    vehicle.vehicleModel = vehicleModel ?? vehicle.vehicleModel;
    vehicle.vehiclePlate = vehiclePlate ?? vehicle.vehiclePlate;
    vehicle.idOperation = idOperation ?? vehicle.idOperation;

    await vehicle.save();

    return vehicle;
  }
}

module.exports = UpdateVehicleUseCase;