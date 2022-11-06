const Router = require('koa-router')
const router = new Router()
const userModel = require('../models/user')

//  增加一条用户
router.post('/user/create',async (ctx) => {
  ctx.response.body =  await userModel.createUser(ctx.request.body)
})

module.exports = router