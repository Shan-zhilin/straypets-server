const sequelize = require('../config/db')
const UserModel = require('../schema/user')(sequelize)

// 新增一个用户记录
const createUser = async (args) => {
  return await UserModel.create(args)
}

module.exports = {
  createUser
}