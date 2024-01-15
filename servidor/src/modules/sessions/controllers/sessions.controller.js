const { object, string } = require("yup");
const CreateSessionUseCase = require("../usecase/createSession.usecase");

const sessionCreationSchema = object({
  password: string().min(8, "Mínimo 8 caracteres.").required(),
  email: string().email().required()
});

class SessionsController {
  async create(req, res) {
    const {email, password} = req.body;

    await sessionCreationSchema.validate(req.body, { abortEarly: false });

    const session = await new CreateSessionUseCase().execute({ email, password });
    
    return res.json(session);
  }
}

module.exports = SessionsController;