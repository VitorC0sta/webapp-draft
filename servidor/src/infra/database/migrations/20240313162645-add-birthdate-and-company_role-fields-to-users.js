module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn("Users", "birthdate", {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE,
   }),
   await queryInterface.addColumn("Users", "company_role", {
    allowNull: true,
    defaultValue: "",
    type: Sequelize.STRING,
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "birthdate");
    await queryInterface.removeColumn("Users", "company_role");
  }
};
