'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_vehicle: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Vehicles",
          key: "id"
        }
      },
      created_at: {
        allowNull: false,
        readOnly: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};