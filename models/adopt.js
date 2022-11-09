const sequelize = require('../config/db')
const AdoptModel = require('../schema/adopt')(sequelize)

// 查看该手机号是否已经领养
const queryAdopt = async (args) => {
  const res = await AdoptModel.findOne({
    where: args
  })
  return res
}

// 新增一条领养记录
const createAdopt = async (args) => {
  const isAdopt = await queryAdopt({phone:args.phone,adoptid:args.adoptid})
  if (isAdopt === null) {
    const res = await AdoptModel.create(args)
    return res
  }else {
    return {isAdopt:true}
  }

}

module.exports = {
  createAdopt
}