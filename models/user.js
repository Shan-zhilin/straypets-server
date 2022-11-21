const sequelize = require('../config/db')
const UserModel = require('../schema/user')(sequelize)
const {formatArray} = require('../utils/format')

// 新增一个用户记录
const createUser = async args => {
  const isExist = await findUser({
    phone: args.userphone
  })
  if (isExist) {
    return {
      success: false,
      code: 200,
      msg: '该手机号已注册,请更换手机号'
    }
  }
  await UserModel.create(args)

  return {
    success: true,
    code: 200,
    msg: '注册成功'
  }
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

// 查询用户列表
const findUserList = async args => {
  const {size,page} = args
  delete args.size
  delete args.page
  const result = await UserModel.findAll({
    where: args,
    offset: Number(size) * page,
    limit: Number(size),
    order:[['id','DESC']]
  })
  const count = await UserModel.count()
  return {
    list: formatArray(result),
    totalCount: count
  }
}

// 删除管理员
const delUser = async args => {
  const result = await UserModel.destroy({
    where:args
  })
  return result
}

// 更新用户信息
const updateAdminInfo = async args => {
  const result = await UserModel.update(args,{
    where:{
      id:args.id
    }
  })
  return result[0]
}

module.exports = {
  createUser,
  findUser,
  findUserList,
  delUser,
  updateAdminInfo
}