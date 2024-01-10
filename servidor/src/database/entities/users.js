'use strict';
const databaseConnection = require('../connection');

const { DataTypes } = require('sequelize');

const Users = databaseConnection.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  national_id_number: DataTypes.STRING,
  administrator: DataTypes.BOOLEAN,
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  id_client: { type: DataTypes.INTEGER, references: {
    model: 'Clients',
    key: 'id'
  }},
  password: DataTypes.STRING
});

Users.findOneByEmail = async function(email) {
  return await this.findOne({ where: { email } });
};

module.exports = Users;