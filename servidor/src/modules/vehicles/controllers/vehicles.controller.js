const createVehicleSchema = require("../schemas/createVehicleSchema");
const ShowVehiclesUseCase = require("../usecases/showAllVechicles.usecase");
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

  async showVehicles(req, res) {
    const userLogged = req.user;
    const { search } = req.query;

    const vehicles = await new ShowVehiclesUseCase().execute({ userLogged, search });

    return res.status(200).json(vehicles);
  }
}

module.exports = VehiclesController;