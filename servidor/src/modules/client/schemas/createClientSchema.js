const {object, string} = require("yup");

const clientCreationSchema = object({
  legal_name: string().required(),
  dba_name: string().required(),
  company_id: string().required(),
  postal_code: string().required(),
  address: string().required(),
  state: string(),
  country: string().required()
})

module.exports = clientCreationSchema;