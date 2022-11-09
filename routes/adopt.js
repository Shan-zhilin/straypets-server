const Router = require('koa-router')
const router = new Router()
const AdminModel = require('../models/adopt')

// test 增加一条领养记录
router.post('/adopt/create',async (ctx) => {
  const res = await AdminModel.createAdopt(ctx.request.body)
  if (res.isAdopt) {
    ctx.response.body = {
      success: false,
      msg: '该手机号已申请领养该宠物哦~',
    }
  }else {
    ctx.response.body = {
      success: true,
      msg: ''
    }
  }
})

module.exports = router