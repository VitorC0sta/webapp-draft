const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/operations");
const AppError = require("../../../infra/utils/AppError");

class ShowVehicleUseCase {
  async execute(id, userLogged) { 
    const vehicle = await Vehicles.findOne({ where: { id } });
   
    if(!vehicle) throw new AppError("Vehicle not found.", 404);
    
    if(userLogged.isAdmin) {  
      return vehicle;
    }

    Operations.hasMany(Vehicles, { foreignKey: "id_operation" });
    Vehicles.belongsTo(Operations, { foreignKey: "id_operation" });

    const companyVehicles = await Operations.findAll({
      attributes: ['id_client'],
      include: [{
        model: Vehicles,
        attributes: []
      }]
    })

    console.log(companyVehicles);

  }
}

module.exports = ShowVehicleUseCase;
