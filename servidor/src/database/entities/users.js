"use strict";
const databaseConnection = require("../connection");

const { DataTypes } = require("sequelize");

const Users = databaseConnection.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  administrator: DataTypes.BOOLEAN,
  nationalIdNumber: { type: DataTypes.STRING, field: "national_id_number"  },
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
  idClient: {
    type: DataTypes.INTEGER,
    field: "id_client",
    references: {
      model: "Clients",
      key: "id",
    },
  },
  status: { type: DataTypes.BOOLEAN, field: "active" },
  password: DataTypes.STRING,
});

Users.findOneByEmail = async function (email) {
  return await this.findOne({ where: { email, active: true } });
};

Users.findOneById = async function (id) {
  return await this.findOne({ where: { id } });
};

module.exports = Users;
