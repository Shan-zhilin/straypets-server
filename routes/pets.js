const Router = require('koa-router')
const router = new Router()
const PetModel = require('../models/pets')

// 添加一条流浪宠物
router.post('/pets/createpet',async (ctx) => {
  await PetModel.createStrayPets(ctx.request.body)
})

module.exports = router