const { object, string } = require("yup");

const createSessionSchema = object({
  password: string().min(6, "Minimo 8 caracteres").required(),
  email: string().email().required(),
});

module.exports = createSessionSchema;