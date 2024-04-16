const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/operations");

class ShowVehiclesUseCase {
  async execute(userLogged) {
    Operations.hasMany(Vehicles, { foreignKey: "idOperation" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });
    
    if (userLogged.isAdmin) {
      const companyVehicles = await Operations.findAll({
        attributes: ['idClient'],
        include: [
          {
            model: Vehicles,  
          },
        ]
      });
      
      return companyVehicles[0];

    }

    const companyVehicles = await Operations.findAll({
      attributes: ['idClient'],
      include: [
        {
          model: Vehicles,
          
        },
      ],
      where: { idClient: userLogged.idClient } 
    });
    
    return companyVehicles[0];
    


    ;
  }
}

module.exports = ShowVehiclesUseCase;
