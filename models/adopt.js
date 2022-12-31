const sequelize = require('../config/db')
const AdoptModel = require('../schema/adopt')(sequelize)
const {formatArray} = require('../utils/format')

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

// 领养条件查询
const queryAdoptList = async (args) => {
  const {size,page} = args
  delete args.size
  delete args.page
  const result = await AdoptModel.findAll({
    where: args,
    offset: Number(size) * page,
    limit: Number(size),
    order:[['id','DESC']]
  })
  const count = await AdoptModel.count()
  return {
    list: formatArray(result),
    totalCount: count
  }
}

// 删除宠物领养记录
const delPet = async (args) => {
  const result = await AdoptModel.destroy({
    where:args
  })
  return result
}

// 更新宠物员信息
const updatePetInfo = async args => {
  const result = await AdoptModel.update(args,{
    where:{
      id:args.id
    }
  })
  return result[0]
}

module.exports = {
  createAdopt,
  queryAdoptList,
  delPet,
  updatePetInfo
}