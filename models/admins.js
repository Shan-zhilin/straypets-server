const sequelize = require('../config/db')
const AdminModel = require('../schema/admins')(sequelize)
const {formatArray} = require('../utils/format')

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

// 管理员条件查询
const queryAdminList = async (args) => {
  const {size,page} = args
  delete args.size
  delete args.page
  const result = await AdminModel.findAll({
    where: args,
    offset: Number(size) * page,
    limit: Number(size)
  })
  const count = await AdminModel.count()
  return {
    list: formatArray(result),
    totalCount: count
  }
}

module.exports = {
  createAdmin,
  findAdmin,
  queryAdminList
}