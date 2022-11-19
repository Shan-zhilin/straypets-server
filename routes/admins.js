const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/admins')

// 添加管理员
router.post('/admin/createadmin', async (ctx) => {
  const res = await AdminModel.createAdmin(ctx.request.body)
  if (res.isAdmin) {
    ctx.response.body = {
      success: false,
      msg: '您已是管理员哦~',
    }
  } else {
    ctx.response.body = {
      success: true,
      msg: ''
    }
  }
})

// 管理员条件筛选
router.post('/admin/list', async (ctx) => {
  const res = await AdminModel.queryAdminList(ctx.request.body)
  ctx.response.body = {
    code: 200,
    success: true,
    data: res
  }
})

// 删除管理员
router.post('/admin/delete', async ctx => {
  const res = await AdminModel.delAdmin(ctx.request.body)
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
router.post('/admin/update/info', async ctx => {
  const res = await AdminModel.updateAdminInfo(ctx.request.body)
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