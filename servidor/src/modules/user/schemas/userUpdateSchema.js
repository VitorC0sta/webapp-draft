const { object, string, boolean, number } = require("yup");

const userUpdateSchema = object({
  password: string().min(8, "Mínimo 8 caracteres"),
  idClient: number(),
  newPassword: string(),
  isAdmin: boolean(),
  status: boolean(),
  postalCode: string(),
  userAddress: string(),
  userCity: string(),
  userState: string(),
  userCountry: string(),
  phoneNumber: string(),
});

module.exports = userUpdateSchema;