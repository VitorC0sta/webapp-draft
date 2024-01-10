const { object, string, boolean, required } = require("yup");
const Users = require('../database/entities/users.js');
const Clients = require('../database/entities/clients.js');

const userCreationSchema = object({
  name: string().required(),
  national_id_number: string().required(),
  password: string().min(8, 'Minimo 8 caracteres').required(),
  email: string().email().required(),
  client_legal_name: string().required(),
  administrator: boolean().required()
});

const validateUserCreation = async (req, res, next) => {
    const { email, client_legal_name,...body } = req;

    await userCreationSchema.validate( body, { abortEarly: false } );

    const chkUserExits = await Users.findOneByEmail(email);
    
    if (chkUserExits) throw new AppError('[ERRO].: Email já cadastrado.');
  
    const client = Clients.findOneByName(body.client_legal_name);

    if(!client) throw new AppError('[ERRO].: Empresa não encontrada');

    next();
}

module.exports ={
  validateUserCreation
}

