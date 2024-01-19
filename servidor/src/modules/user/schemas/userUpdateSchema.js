const { object, string, boolean, number } = require("yup");

const userCreationSchema = object({
  password: string().min(8, "Mínimo 8 caracteres"),
  idClient: number(),
  newPassword: string(),
  isAdmin: boolean(),
  status: boolean() 
});

module.exports = userCreationSchema;