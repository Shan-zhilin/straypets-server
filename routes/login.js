const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/admins')
const UserModel = require('../models/user')

// 查询是否为管理员
const queryAdmin = async ({phone,username}) => {
  const data = await AdminModel.findAdmin({phone})

  if (!data) {
    return {
      success: false,
      msg: '该手机号未注册',
      code: 200
    }
  } 

  if (username !== data.adminname) {
    return {
      success: false,
      msg: '用户名错误',
      code: 200
    }
  }
  return {
    success:true,
    code: 200,
    msg: '',
    data: {
      isAdmin: true,
      nickname: data.adminname,
      ...data
    }
  }
}

// 查询是否为用户
const queryUser = async ({phone,username}) => {
  const data = await UserModel.findUser({phone})
  if (!data) {
    return {
      success: false,
      msg: '该手机号未注册',
      code: 200
    }
  } 
  if (username !== data.username) {
    return {
      success: false,
      msg: '用户名错误',
      code: 200
    }
  }
  return {
    success:true,
    code: 200,
    msg: '',
    data: {
      isAdmin: false,
      nickname: data.username,
      ...data
    }
  }
}

router.post('/login',async ctx => {
  const {body} = ctx.request
  if (!Number(body.type)) {
    ctx.response.body = await queryAdmin(ctx.request.body)
  } else {
    ctx.response.body = await queryUser(ctx.request.body)
  }
})

module.exports = router