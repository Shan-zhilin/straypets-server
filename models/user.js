const sequelize = require('../config/db')
const UserModel = require('../schema/user')(sequelize)

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

module.exports = {
  createUser,
  findUser
}