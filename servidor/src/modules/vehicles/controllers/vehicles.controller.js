const createVehicleSchema = require("../schemas/createVehicleSchema");
const ShowVehiclesUseCase = require("../usecases/showAllVechicles.usecase");
const ShowVehicleUseCase = require("../usecases/showVehicle.usecase");
const VehiclesCreateUseCase = require("../usecases/vehiclesCreate.usecase");


class VehiclesController {
  async create(req, res) {
    const { vehicleName, vehicleColor, vehicleModel, vehiclePlate, idOperation } = req.body;    

    await createVehicleSchema.validate(req.body, {abortEarly: false});
    
    const vehicle = await new VehiclesCreateUseCase().execute( 
      vehicleName,
      vehicleColor,
      vehicleModel,
      vehiclePlate,
      idOperation
    );

    return res.status(201).json(vehicle);
  }

  async show(req, res) {
    const { id } = req.params;
    const userLogged = req.body;

    const vehicle = await new ShowVehicleUseCase().execute(id, userLogged);

    res.status(200).json(vehicle);
  }

  async showVehicles(req, res) {
    const userLogged = req.user;

    const vehicles = await new ShowVehiclesUseCase().execute(userLogged);

    return res.status(200).json(vehicles);
  }
}

module.exports = VehiclesController;