'use strict';
const databaseConnection = require("../connection");

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    national_id_number: DataTypes.STRING,
    password: DataTypes.STRING,
    administrator: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize: databaseConnection(),
    modelName: 'Users',
  });

  return Users
};