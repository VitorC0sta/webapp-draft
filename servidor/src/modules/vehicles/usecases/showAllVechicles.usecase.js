const Vehicles = require("../../../infra/database/entities/vehicles");
const Operations = require("../../../infra/database/entities/operations");
const { Op, Sequelize } = require("sequelize");

class ShowVehiclesUseCase {
  async execute({ userLogged, search }) {
    
    Operations.hasMany(Vehicles, { foreignKey: "idOperation" });
    Vehicles.belongsTo(Operations, { foreignKey: "idOperation" });
    
    search = search.toLowerCase();

    let where = search ? {
      [Op.or]: [
        { id: Number.isNaN(search)? search : null },
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("vehicle_name")), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("vehicle_plate")), {
          [Op.substring]: search,
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("vehicle_color")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("vehicle_model")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("Operation.operation_name")), {
          [Op.substring]: search
        }),
      ],
    } : {};

    if (!userLogged.isAdmin) {
      where = {
        ...where,
        '$Operation.id_client$': userLogged.idClient,
      };
    }

    const companyVehicles = await Vehicles.findAll(
      {
        include: [
          {
            model: Operations,
            attributes: ['operationName'],
          }
        ],
        where: where
      }
    );
    
    return companyVehicles;
    
  }
}

module.exports = ShowVehiclesUseCase;
