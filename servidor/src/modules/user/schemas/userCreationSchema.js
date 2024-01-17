const { object, string, boolean, number } = require("yup");

const userCreationSchema = object({
  name: string().required(),
  national_id_number: string().required(),
  password: string().min(8, "Minimo 8 caracteres").required(),
  email: string().email().required(),
  id_client: number(),
  administrator: boolean().required(),
});

module.exports = userCreationSchema;