const UpdateUserAvatarUseCase = require("../usecases/updateUserAvatar.usecase");

class UserAvatarController {
  async update(req, res) {
    const { id } = req.params;
    const avatarFilename = req.file.filename;
    
    const user = await new UpdateUserAvatarUseCase().execute(id, avatarFilename);

    return res.status(200).json(user);
    
  }
}

module.exports = UserAvatarController;
