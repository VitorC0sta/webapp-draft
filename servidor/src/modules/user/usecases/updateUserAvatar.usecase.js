const Users = require("../../../infra/database/entities/users");
const AppError = require("../../../infra/utils/AppError");
const DiskStorage = require("../../../providers/DiskStorage");

class UpdateUserAvatarUseCase {
  async execute(id, avatarFilename) {
    const diskStorage = new DiskStorage();

    const user = await Users.findOne({ where: { id } });
    
    if(!user) throw new AppError("Somente usuários autenticados podem trocar a foto.", 401);

    if(user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);

    user.avatar = filename;


    await user.save();

    return user;
  }
}

module.exports = UpdateUserAvatarUseCase;