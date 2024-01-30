const databaseConnection = require('../connection');

const { DataTypes } = require('sequelize');

const Clients = databaseConnection.define('Clients', {
  legalName: { type: DataTypes.STRING, field: "legal_name" },
  dbaName: { type: DataTypes.STRING, field: "dba_name" },
  companyId: { type: DataTypes.STRING, field: "company_id" },
  postal_code: { type: DataTypes.STRING, field: "postal_code" },
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  country: DataTypes.STRING,
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  active: DataTypes.BOOLEAN
});

Clients.find = async function (columnKey, value) {
  const searchField = {};
  searchField[columnKey] = value;

  return await this.findOne({ where: searchField });
};

module.exports = Clients;
