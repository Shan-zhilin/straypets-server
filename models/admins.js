const sequelize = require('../config/db')
const AdminModel = require('../schema/admins')(sequelize)

// 管理员查询
const findAdmin = async args => {
  const result =  await AdminModel.findOne({where: {
    phone: args.phone
  }})

  if (!result) return false

  return result.dataValues
}

// 添加管理员
const createAdmin = async (args) => {
  const isExist = await findAdmin(args)
  if (!isExist) {
    const res = await AdminModel.create(args)
    return res
  }else {
    return {
      isAdmin: true
    }
  }

}

module.exports = {
  createAdmin,
  findAdmin
}