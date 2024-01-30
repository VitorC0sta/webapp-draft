const { object, string, number } = require("yup");

const createVehicleSchema = object({
  vehicleName: string(),
  vehicleColor: string(),
  vehicleModel: string().required(),
  vehiclePlate: string().max(9, "Digite uma placa válida.").required(),
  idOperation: number().required()
}); 

module.exports = createVehicleSchema;