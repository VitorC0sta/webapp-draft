module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'first_access', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'first_access');
  }
};
