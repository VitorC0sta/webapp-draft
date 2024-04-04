module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Clients', 'company_phone', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    });
    queryInterface.addColumn('Clients', 'company_email', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Clients', 'company_phone');
    queryInterface.removeColumn('Clients', 'company_email');
  }
};
