module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Operations', 'id_client', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Clients',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn("Vehicles", "id_operation", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Operations",
        key: "id"
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn("Events", "id_vehicles", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Vehicles",
        key: "id"
      },
      onUpdate: "CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("id_client", "Operations");
    await queryInterface.removeColumn("id_operations", "Vehicles");
    await queryInterface.removeColumn("id_vehicles", "Events");
  }
};
