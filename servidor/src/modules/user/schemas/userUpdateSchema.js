const { object, string, boolean, number } = require("yup");

const userCreationSchema = object({
  name: string(),
  password: string().min(8, "Minimo 8 caracteres").required(),
  email: string().email(),
  id_client: number(),
  newPassword: string(),
  reNewPassword: string(),
  administrator: boolean().required(),
});

module.exports = userCreationSchema;