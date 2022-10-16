const sequelize = require('../config/db')
const UserModel = require('../schema/user')(sequelize)

// 新增一个用户记录
const createUser = async args => {
  return await UserModel.create(args)
}

// 查询用户
const findUser = async args => {
  const result = await UserModel.findOne({
    where: {
      userphone: args.phone
    }
  })

  if (!result) return false

  return result.dataValues
}

module.exports = {
  createUser,
  findUser
}