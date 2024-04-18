const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/operations");

class ShowVehiclesUseCase {
  async execute(userLogged) {

    Operations.hasMany(Vehicles, { foreignKey: "idOperation" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });
    
    if (userLogged.isAdmin) {
      const companyVehicles = await Vehicles.findAll(
        {
          include: {
            model: Operations,
            attributes: ['operationName']
          }
        }
      );
      
      return companyVehicles;
    }

    const companyVehicles = await Vehicles.findAll(
      {
        include: {
          model: Operations,
          attributes: ['operationName'],
          where: { 
            idClient: userLogged.idClient
          }
        },
      }
    );
    
    return companyVehicles;
    
  }
}

module.exports = ShowVehiclesUseCase;
