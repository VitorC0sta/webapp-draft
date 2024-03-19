const { object, string, boolean, number, date } = require("yup");

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
  birthdate: date(),
  companyRole: string(),
});

module.exports = userUpdateSchema;