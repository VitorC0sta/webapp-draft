'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    })
    await queryInterface.addColumn("Clients", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "active");
    await queryInterface.removeColumn("Clients", "active");
  }
};
