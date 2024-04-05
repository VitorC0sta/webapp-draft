const databaseConnection = require('../connection');

const { DataTypes } = require('sequelize');

const Clients = databaseConnection.define('Clients', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  legalName: { type: DataTypes.STRING, field: "legal_name" },
  dbaName: { type: DataTypes.STRING, field: "dba_name" },
  companyId: { type: DataTypes.STRING, field: "company_id" },
  postalCode: { type: DataTypes.STRING, field: "postal_code" },
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: {type: DataTypes.STRING, allowNull: true},
  country: DataTypes.STRING,
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  active: DataTypes.BOOLEAN,
  companyPhone: {type: DataTypes.STRING, field: 'company_phone'},
  companyEmail: {type: DataTypes.STRING, field: 'company_email'},
});
 

module.exports = Clients;
