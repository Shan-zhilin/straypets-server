const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/admins')

// 添加管理员
router.post('/admin/createadmin',async (ctx) => {
  await AdminModel.createAdmin(ctx.request.body)
})

module.exports = router