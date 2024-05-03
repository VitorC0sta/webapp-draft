const databaseConnection = require("../connection");

const { DataTypes } = require("sequelize");

const Users = databaseConnection.define("User", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  administrator: DataTypes.BOOLEAN,
  password: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
  birthdate: DataTypes.DATE,
  nationalIdNumber: { type: DataTypes.STRING, field: "national_id_number"  },
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
  companyRole: {type: DataTypes.STRING, field: "company_role"},
  idClient: {
    type: DataTypes.INTEGER,
    field: "id_client",
    references: {
      model: "Clients",
      key: "id",
    },
  },
  postalCode: { type: DataTypes.STRING, field: "postal_code" },
  userAddress: { type: DataTypes.STRING, field: "user_address" },
  userCity: { type: DataTypes.STRING, field: "user_city" },
  userState: { type: DataTypes.STRING, field: "user_state" },
  userCountry: { type: DataTypes.STRING, field: "user_country" },
  phoneNumber: { type: DataTypes.STRING, field: "phone_number"},
  firstAccess: {type: DataTypes.BOOLEAN, field: "first_access"},
});


module.exports = Users;
