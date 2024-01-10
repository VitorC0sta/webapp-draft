'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Clients', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Clients', 'updatedAt', 'updated_at');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Clients', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Clients', 'updated_at', 'updatedAt');
  }
};
