'use strict';
const databaseConnection = require('../connection');

const { DataTypes } = require('sequelize');

const Clients = databaseConnection.define('Clients', {
  legal_name: DataTypes.STRING,
  dba_name: DataTypes.STRING,
  company_id: DataTypes.STRING,
  postal_code: DataTypes.STRING,
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  country: DataTypes.STRING,
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
});

Clients.findOneByName = async function(legal_name) {
  return await this.findOne({ where: { legal_name } });
}

module.exports = Clients;
