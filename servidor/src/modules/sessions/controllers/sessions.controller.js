const CreateSessionUseCase = require("../usecase/createSession.usecase");
const createSessionSchema = require("../schemas/createSession.schema");
const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");
const crypto = require("crypto");
class SessionsController {
  async authenticate(req, res) {
    const {email, password} = req.body;

    await createSessionSchema.validate(req.body, { abortEarly: false });

    const session = await new CreateSessionUseCase().execute({ email, password });
    
    return res.json(session);
  }

  async recoveryPassword(req, res) {
    const { email } = req.body; 

    try {
      const user = await Users.findOne({ where: {email} });

      if(!user) {
        throw new AppError("Email e/ou usuário inválido", 401);
      }

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();

      now.setMinutes(now.getMinutes() + 30);


    } catch (err) {
      response.status(400).send({error: 'Erro, tente novamente'});
    }

  }
}

module.exports = SessionsController;