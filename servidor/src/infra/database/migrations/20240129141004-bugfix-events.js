module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "id_vehicles");
    await queryInterface.renameColumn("Events", "event", "event_name");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "id_vehicles", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Vehicles",
        key: "id"
      },
      onUpdate: "CASCADE"
    }),
    await queryInterface.renameColumn("Events", "event_name", "event");
  }
};
