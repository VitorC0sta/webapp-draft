const { object, number, string } = require("yup");

const userDeleteSchema = object({
  id: number().required(),
  email: string().email()
});

module.exports = userDeleteSchema;