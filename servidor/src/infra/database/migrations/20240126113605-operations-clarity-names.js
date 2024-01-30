module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Operations', 'name', 'operation_name');
    await queryInterface.renameColumn('Operations', 'city', 'destination_city');
    await queryInterface.renameColumn('Operations', 'region', 'destination_region');
    await queryInterface.renameColumn('Operations', 'country', 'destination_country');    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Operations', 'operation_name', 'name');
    await queryInterface.renameColumn('Operations', 'destination_city', 'city');
    await queryInterface.renameColumn('Operations', 'destination_region', 'region');
    await queryInterface.renameColumn('Operations', 'destination_country', 'country');
  }
};
