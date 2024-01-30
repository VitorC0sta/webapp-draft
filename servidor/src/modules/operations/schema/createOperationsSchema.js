const { object, string, number } = require("yup");

const createOperationSchema = object({
  operationName: string().required(),
  destinationCity: string().required(),
  destinationRegion: string(),
  destinationCountry: string().required(),
  idClient: number().required()
});

module.exports = createOperationSchema;