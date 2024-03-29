const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname,"..", "infra", "uploads");

const   MULTER = {
  storage: multer.diskStorage( {
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const hashFile = crypto.randomBytes(10).toString("hex");
      const fileName = `${hashFile}.${file.originalname}`;
    
      return callback(null, fileName)
    }
  } )
}

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
}