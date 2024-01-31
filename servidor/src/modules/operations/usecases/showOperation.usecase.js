const Operations = require("../../../infra/database/entities/operations");
const Vehicles = require("../../../infra/database/entities/vehicles");
const AppError = require("../../../infra/utils/AppError");

class ShowOperationUseCase {
  async execute( id, userLogged ) {

    const operation = await Operations.findOne( 
      { where: { id },
         include: [{ 
          model: Vehicles,
          as: 'vehicles'
        }]
      }
    );
    
    if(!operation) throw new AppError('Operação não existe.', 404);
    if(operation.idClient !== userLogged.idClient) {
      throw new AppError("Você não tem permissão para esta ação", 403); 
    }
    return operation;
  }
}

module.exports = ShowOperationUseCase;