'use strict';
const databaseConnection = require('../connection');

const { DataTypes } = require('sequelize');

const User = databaseConnection.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  national_id_number: DataTypes.STRING,
  administrator: DataTypes.BOOLEAN,
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
});

return User
