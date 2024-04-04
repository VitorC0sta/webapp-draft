const { object, string } = require("yup");

const clientCreationSchema = object({
  active,
  city,
  companyEmail,
  companyId,
  companyPhone,
  country,
  dbaName,
  postalCode,
  legalName: string().required(),
  dbaName: string().required(),
  companyId: string().required(),
  postalCode: string().required(),
  address: string().required(),
  state: string(),
  country: string().required(),
});

module.exports = clientCreationSchema;
active,
            city,
            companyEmail,
            companyId,
            companyPhone,
            country,
            dbaName,
            id,
            postalCode,