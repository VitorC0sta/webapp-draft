const UpdateVehicleUseCase = require("../usecases/updateVehicle.usecase");

class VehicleController {
  async updateVehicle(req, res) {
    const {
      id,
      vehicleName,
      vehicleColor,
      vehicleModel,
      vehiclePlate,
      idOperation,
    } = req.body;

    const updatedVehicle = await new UpdateVehicleUseCase().execute(
      id,
      vehicleName,
      vehicleColor,
      vehicleModel,
      vehiclePlate,
      idOperation
    );

    res.status(200).json(updatedVehicle);
  }
}

module.exports = VehicleController;