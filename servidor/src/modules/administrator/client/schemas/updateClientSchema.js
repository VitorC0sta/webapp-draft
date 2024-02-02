const {object, string, number, boolean} = require("yup");

const updateClientSchema = object({
  id: number().required,
  company_id: string(),
  postal_code: string(),
  address: string(),
  state: string(),
  country: string(),
  active: boolean()
})

module.exports = updateClientSchema;