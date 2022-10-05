const sequelize = require('../config/db')
const AdoptModel = require('../schema/adopt')(sequelize)

// 新增一条领养记录
const createAdopt = async (args) => {
  return await AdoptModel.create(args)
}

module.exports = {
  createAdopt
}