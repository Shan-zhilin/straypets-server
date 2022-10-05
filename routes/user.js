const Router = require('koa-router')
const router = new Router()
const userModel = require('../models/user')

// test 增加一条领养记录
router.post('/user/create',async (ctx) => {
  await userModel.createUser(ctx.request.body)
})

module.exports = router