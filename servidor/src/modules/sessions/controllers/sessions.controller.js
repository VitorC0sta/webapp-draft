const { object, string } = require("yup");
const CreateSessionUseCase = require("../usecase/createSession.usecase");
const createSessionSchema = require("../schemas/createSession.schema");

class SessionsController {
  async authenticate(req, res) {
    const {email, password} = req.body;

    await createSessionSchema.validate(req.body, { abortEarly: false });

    const session = await new CreateSessionUseCase().execute({ email, password });
    
    return res.json(session);
  }
}

module.exports = SessionsController;