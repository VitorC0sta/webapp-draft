'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'id_client', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Clients',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.renameColumn('Users', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Users', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Users', 'cpf', 'national_id_number');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'id_client');
    await queryInterface.renameColumn('Users', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Users', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('Users', 'national_id_number', 'cpf');
  }
};
