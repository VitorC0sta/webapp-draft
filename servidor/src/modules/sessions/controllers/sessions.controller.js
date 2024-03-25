const CreateSessionUseCase = require("../usecase/createSession.usecase");
const createSessionSchema = require("../schemas/createSession.schema");
const SendRecoveryEmailUseCase = require("../usecase/sendRecoveryEmail.usecase");
const ResetPasswordUseCase = require("../usecase/resetPassword.usecase");

class SessionsController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    await createSessionSchema.validate(req.body, { abortEarly: false });

    const session = await new CreateSessionUseCase().execute({
      email,
      password,
    });

    return res.json(session);
  }

  async sendRecoveryEmail(req, res) {
    const { recoveryEmail } = req.body;

    await new SendRecoveryEmailUseCase().execute({ email: recoveryEmail, url });

    return res.status(204).json();
  }

  async resetPassword(req, res) {
    const { newPassword, confirmNewPassword } = req.body;
    const { token } = request.params;

    await ResetPasswordUseCase().execute({
      token,
      newPassword,
      confirmNewPassword,
    });

    return;
  }
}

module.exports = SessionsController;
