const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/adopt')

// test 增加一条领养记录
router.post('/adopt/create',async (ctx) => {
  await AdminModel.createAdopt(ctx.request.body)
})

module.exports = router