const { object, string, boolean, number } = require("yup");

const userCreationSchema = object({
  name: string().required(),
  nationalIdNumber: string().required(),
  password: string().min(8, "Minimo 8 caracteres").required(),
  email: string().email().required(),
  idClient: number(),
  administrator: boolean().required(),
  postalCode: string(),
  userAddress: string(),
  userCity: string(),
  userState: string(),
  userCountry: string(),
  phoneNumber: string(),
});

module.exports = userCreationSchema;