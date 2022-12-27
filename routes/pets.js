const Router = require('koa-router')
const router = new Router()
const PetModel = require('../models/pets')

// 添加一条流浪宠物
router.post('/pets/createpet',async (ctx) => {
  console.log('enter')
  const res = await PetModel.createStrayPets(ctx.request.body)
  if (res) {
    ctx.response.body = {
      success: true,
      msg: ''
    }
  }
})

// 查询
router.post('/pets/getpets',async (ctx) => {
  const {body} = ctx.request
  if (body.id) {
    ctx.response.body = await PetModel.findOnePets({id:body.id})
  }else {
    ctx.response.body = await PetModel.findAllPets()
  }
})

// 查询宠物列表
router.post('/pets/list',async ctx => {
  const res = await PetModel.findPetsList(ctx.request.body)
  ctx.response.body = {
    code: 200,
    success: true,
    data: res
  }
})


// 删除宠物
router.post('/pet/delete', async ctx => {
  const res = await PetModel.delPet(ctx.request.body)
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
      msg: '宠物不存在'
    }
  }
})

module.exports = router