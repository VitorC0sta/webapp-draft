const { Op, Sequelize } = require("sequelize");
const Clients = require("../../../../infra/database/entities/clients");

class ShowClientsUseCase {
  async execute({ search }) {
    search = search.toLowerCase();

    let where = search ? {
      [Op.or]: [
        { id: Number.isNaN(search)? search : null },
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("dba_name")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("company_id")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("company_phone")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("company_email")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("postal_code")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("city")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("state")), {
          [Op.substring]: search
        }),
        Sequelize.where(Sequelize.fn('lower', Sequelize.col("country")), {
          [Op.substring]: search
        }),
      ]
    } : {};

    const clients = await Clients.findAll({
      where: where,
    })

    return clients;
  }
}

module.exports = ShowClientsUseCase;