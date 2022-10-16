const sequelize = require('../config/db')
const AdminModel = require('../schema/admins')(sequelize)

// 添加管理员
const createAdmin = async (args) => {
  return await AdminModel.create(args)
}

// 管理员查询
const findAdmin = async args => {
  const result =  await AdminModel.findOne({where: {
    phone: args.phone
  }})

  if (!result) return false

  return result.dataValues
}

module.exports = {
  createAdmin,
  findAdmin
}