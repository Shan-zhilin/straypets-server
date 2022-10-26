const Router = require('koa-router')
const router = new Router()
const PetModel = require('../models/pets')

// 添加一条流浪宠物
router.post('/pets/createpet',async (ctx) => {
  await PetModel.createStrayPets(ctx.request.body)
})

// 查询
router.post('/pets/get/pets',async (ctx) => {
  const {body} = ctx.request
  if (body.id) {
    ctx.response.body = await PetModel.findOnePets({id:body.id})
  }else {
    ctx.response.body = await PetModel.findAllPets()
  }
})

module.exports = router