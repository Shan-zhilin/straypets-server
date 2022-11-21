const Router = require('koa-router')
const router = new Router()
const userModel = require('../models/user')

//  增加一条用户
router.post('/user/create',async ctx => {
  ctx.response.body =  await userModel.createUser(ctx.request.body)
})

// 查询用户列表
router.post('/user/list',async ctx => {
  const res = await userModel.findUserList(ctx.request.body)
  ctx.response.body = {
    code: 200,
    success: true,
    data: res
  }
})

// 删除用户
router.post('/user/delete', async ctx => {
  const res = await userModel.delUser(ctx.request.body)
  if (res) {
    ctx.response.body = {
      code: 200,
      success: true,
      msg: '删除成功'
    }
  } else {
    ctx.response.body = {
      code: 200,
      success: true,
      msg: '管理员不存在'
    }
  }
})

// 信息更新
router.post('/user/update/info', async ctx => {
  const res = await userModel.updateAdminInfo(ctx.request.body)
  if (res) {
    ctx.response.body = {
      code: 200,
      success: true,
      msg: '修改成功'
    }
  } else {
    ctx.response.body = {
      code: 200,
      success: true,
      msg: '修改信息失败'
    }
  }
})

module.exports = router