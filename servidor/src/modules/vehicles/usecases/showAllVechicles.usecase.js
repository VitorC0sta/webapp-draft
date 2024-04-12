const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/operations");

class ShowVehiclesUseCase {
  async execute(userLogged) {
    if (userLogged.isAdmin) 
      return await Vehicles.findAll();

    Operations.hasMany(Vehicles, { foreignKey: "idOperation" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });

    const companyVehicles = await Operations.findAll({
      attributes: ['idClient'],
      include: [
        {
          model: Vehicles,
        },
      ],
      where: { idClient: userLogged.idClient } 
    });

    return companyVehicles
    ;
  }
}

module.exports = ShowVehiclesUseCase;
