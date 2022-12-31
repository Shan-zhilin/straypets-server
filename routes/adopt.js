const Router = require('koa-router')
const router = new Router()
const AdoptModel = require('../models/adopt')

// 增加一条领养记录
router.post('/adopt/create',async (ctx) => {
  const res = await AdoptModel.createAdopt(ctx.request.body)
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

// 领养列表
router.post('/adopt/list',async ctx => {
  const res = await AdoptModel.queryAdoptList(ctx.request.body)
  ctx.response.body = {
    code: 200,
    success: true,
    data: res
  }
})

// 删除一条记录
router.post('/adopt/delete', async ctx => {
  const res = await AdoptModel.delPet(ctx.request.body)
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
router.post('/adopt/update/info', async ctx => {
  const res = await AdoptModel.updatePetInfo(ctx.request.body)
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