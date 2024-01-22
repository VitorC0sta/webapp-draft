const { object, number } = require("yup");

const userDeleteSchema = object({
  id: number().required(),
  email: email()
});

module.exports = userDeleteSchema;