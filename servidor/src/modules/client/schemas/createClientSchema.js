const { object, string } = require("yup");

const clientCreationSchema = object({
  city: string().required(),
  companyEmail: string().required(),
  companyPhone: string().required(),
  country: string().required(),  
  legalName: string().required(),
  dbaName: string().required(),
  companyId: string().required(),
  postalCode: string().required(),
  address: string().required(),
  state: string(),
  country: string().required(),
});

module.exports = clientCreationSchema;