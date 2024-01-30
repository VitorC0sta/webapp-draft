module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("Vehicles", "name", "vehicle_name");
    await queryInterface.renameColumn("Vehicles", "color", "vehicle_color");
    await queryInterface.renameColumn("Vehicles", "model", "vehicle_model");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn("Vehicles", "vehicle_name", "name");
    await queryInterface.renameColumn("Vehicles", "vehicle_color", "color");
    await queryInterface.renameColumn("Vehicles", "vehicle_model", "model");
  }
};
