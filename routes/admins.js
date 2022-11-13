const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/admins')

// 添加管理员
router.post('/admin/createadmin',async (ctx) => {
  const res = await AdminModel.createAdmin(ctx.request.body)
  if (res.isAdmin) {
    ctx.response.body = {
      success: false,
      msg: '您已是管理员哦~',
    }
  }else {
    ctx.response.body = {
      success: true,
      msg: ''
    }
  }
})

module.exports = router