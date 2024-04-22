const { Op, Sequelize } = require("sequelize");
const Users = require("../../../../infra/database/entities/users");

class ShowUsersUseCase {
  async execute({ search }) {

    search = search.toLowerCase();
    
    const where = search ? {
      [Op.or]: [
        {id: Number.isNaN(search)? search : null},
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("name")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("phone_number")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("email")), {
          [Op.substring]: search
        }),
        
      ]
    } : {} ;

    const users = (await Users.findAll({ where: where })).map(user => {
      user.password = undefined;
      return user;
    }); 
    
    return users;
  }
}

module.exports = ShowUsersUseCase;