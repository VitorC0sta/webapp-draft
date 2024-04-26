const bcrypt = require("bcrypt");

module.exports = {
  async hash(password) {
    return await bcrypt.hash(password, 8);
  },
  
  async compare(password, comparedPassword) {
    return await bcrypt.compare(password, comparedPassword);
  }
}
