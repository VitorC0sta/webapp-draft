
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Operations", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    })
    await queryInterface.changeColumn("Vehicles", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Operations", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
    await queryInterface.changeColumn("Vehicles", "active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
  }
};
