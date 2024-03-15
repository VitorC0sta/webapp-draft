module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "postal_code", {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: "",
    });
    await queryInterface.addColumn("Users", "user_address", {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: "",
    });
    await queryInterface.addColumn("Users", "user_city", {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: "",
    });
    await queryInterface.addColumn("Users", "user_state", {
      type: Sequelize.STRING,
      defaultValue: "",
    });
    await queryInterface.addColumn("Users", "user_country", {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: "",
    });
    await queryInterface.addColumn("Users", "phone_number", {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: "",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "postal_code");
    await queryInterface.removeColumn("Users", "user_address");
    await queryInterface.removeColumn("Users", "user_city");
    await queryInterface.removeColumn("Users", "user_state");
    await queryInterface.removeColumn("Users", "user_country");
    await queryInterface.removeColumn("Users", "phone_number");
    
  }
};
